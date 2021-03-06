import { Injectable } from '@angular/core';
import { Exercise } from '../_interfaces/exercise.interface';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { ProcessingService } from './processing.service';
import { MessageHandlerService } from './message-handler.service';
import { Store } from '@ngrx/store';
import * as Training from '../modules/_training/training.actions';
import * as fromTraining from '../modules/_training/training.reducer';

@Injectable()
export class TrainingService {
    exerciseChanged$: Observable<boolean> = this.store.select(fromTraining.getIsTraining);
    availableSubject$: Observable<Exercise[]> = this.store.select(fromTraining.getAvailableExercises);
    finishedExercises$: Observable<Exercise[]> = this.store.select(fromTraining.getFinishedExercises);

    private firebaseSubs: Subscription[] = [];

    constructor(
        private db: AngularFirestore,
        private process: ProcessingService,
        private messageHandler: MessageHandlerService,
        private store: Store<fromTraining.State>
    ) {}

    fetchAvailableExercises(): Subscription {
        const availableExercises = this.db
            .collection('availableExercises')
            .snapshotChanges()
            .pipe(
                map((docArray: DocumentData) => {
                    const mapArray = this.mapExercisePayload(docArray);
                    return mapArray;
                })
            )
            .subscribe(
                (exercises: Exercise[]) => {
                    this.process.off();
                    this.store.dispatch(new Training.SetAvailableTraining(exercises));
                },
                (error) => {
                    this.process.off();
                    this.messageHandler.openMessageHandler('error-handler', error.message, 'Error', 6000);
                }
            );
        this.firebaseSubs.push(availableExercises);
        return availableExercises;
    }

    private mapExercisePayload(docArray: DocumentData): Exercise[] {
        return docArray.map((doc) => {
            return {
                id: doc.payload.doc.id,
                ...doc.payload.doc.data(),
            };
        });
    }

    startExercise(selectedId: string) {
        this.store.dispatch(new Training.StartActiveTraining(selectedId));
    }

    completeExercise(): Subscription {
        return this.store
            .select(fromTraining.getActiveTraining)
            .pipe(take(1))
            .subscribe((ex) => {
                this.addDataToDatabase({ ...ex, date: new Date(), state: 'completed' });
                this.store.dispatch(new Training.StopActiveTraining());
            });
    }

    cancelExercise(progress: number): Subscription {
        return this.store
            .select(fromTraining.getActiveTraining)
            .pipe(take(1))
            .subscribe((ex) => {
                this.addDataToDatabase({
                    ...ex,
                    duration: ex.duration * (progress / 100),
                    calories: ex.calories * (progress / 100),
                    date: new Date(),
                    state: 'cancelled',
                });
                this.store.dispatch(new Training.StopActiveTraining());
            });
    }

    fetchCompletedOrCancelledExercises(): Subscription {
        const pastExercises = this.db
            .collection('finishedExercises')
            .valueChanges()
            .subscribe(
                (exercises: Exercise[]) => {
                    this.process.off();
                    this.store.dispatch(new Training.SetFinishedTraining(exercises));
                },
                (error) => {
                    this.process.off();
                    this.messageHandler.openMessageHandler('error-handler', error.message, 'Error', 6000);
                }
            );
        this.firebaseSubs.push(pastExercises);
        return pastExercises;
    }

    cancelSubscriptions() {
        this.firebaseSubs.forEach((sub) => {
            sub.unsubscribe();
        });
    }

    private addDataToDatabase(exercise: Exercise) {
        this.db.collection('finishedExercises').add(exercise);
    }
}
