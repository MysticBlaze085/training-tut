import { Injectable } from '@angular/core';
import { Exercise } from '../_interfaces/exercise.interface';
import { BehaviorSubject, Subject, Observable, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TrainingService {
    exerciseChanged = new Subject<Exercise>();

    // point of truth
    private availableExercises: Exercise[] = [];
    private runningExercise: Exercise;

    private availableSubject: BehaviorSubject<Exercise[]> = new BehaviorSubject<Exercise[]>([]);
    availableSubject$: Observable<Exercise[]> = this.availableSubject.asObservable();
    private finishedExercisesSubject: BehaviorSubject<Exercise[]> = new BehaviorSubject<Exercise[]>([]);
    finishedExercises$: Observable<Exercise[]> = this.finishedExercisesSubject.asObservable();

    fbSubs: Subscription[] = [];

    constructor(private db: AngularFirestore) {}

    fetchAvailableExercises(): Observable<Exercise[]> {
        return this.db
            .collection('availableExercises')
            .snapshotChanges()
            .pipe(
                map((docArray) => {
                    const mapArray = this.mapExercisePayload(docArray);
                    this.availableExercises = mapArray;
                    this.availableSubject.next([...this.availableExercises]);
                    return mapArray;
                })
            );
    }

    private mapExercisePayload(docArray): Exercise[] {
        return docArray.map((doc) => {
            return {
                id: doc.payload.doc.id,
                ...doc.payload.doc.data(),
            };
        });
    }

    startExercise(selectedId: string) {
        this.runningExercise = this.availableExercises.find((ex) => ex.id === selectedId);
        this.exerciseChanged.next({ ...this.runningExercise });
    }

    completeExercise() {
        this.addDataToDatabase({ ...this.runningExercise, date: new Date(), state: 'completed' });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        this.addDataToDatabase({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100),
            date: new Date(),
            state: 'cancelled',
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    getRunningExercise() {
        return { ...this.runningExercise };
    }

    fetchCompletedOrCancelledExercises(): Observable<any> {
        return this.db
            .collection('finishedExercises')
            .valueChanges()
            .pipe(tap((exercises: Exercise[]) => this.finishedExercisesSubject.next([...exercises])));
    }

    private addDataToDatabase(exercise: Exercise) {
        this.db.collection('finishedExercises').add(exercise);
    }
}
