import { Injectable } from '@angular/core';
import { Exercise } from '../_interfaces/exercise.interface';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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

    constructor(private db: AngularFirestore) {}

    fetchAvailableExercises() {
        this.db
            .collection('availableExercises')
            .snapshotChanges()
            .pipe(map((docArray) => this.mapExercisePayload(docArray)))
            .subscribe((mapArray) => {
                this.availableExercises = mapArray;
                this.availableSubject.next([...this.availableExercises]);
            });
    }

    private mapExercisePayload(docArray): Exercise[] {
        return docArray.map((doc) => {
            return {
                id: doc.payload.doc.id,
                ...doc.payload.doc.data(),
            };
        });
    }

    startExercise(selectedId: string): void {
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

    fetchCompletedOrCancelledExercisers() {
        this.db
            .collection('finishedExercises')
            .valueChanges()
            .subscribe((exercises: Exercise[]) => {
                this.finishedExercisesSubject.next([...exercises]);
            });
    }

    private addDataToDatabase(exercise: Exercise) {
        this.db.collection('finishedExercises').add(exercise);
    }
}
