import { Injectable } from '@angular/core';
import { Exercise } from '../_interfaces/exercise.interface';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class TrainingService {
    exerciseChanged = new Subject<Exercise>();

    private availableExercises: Exercise[] = [];
    private runningExercise: Exercise;
    private exercises: Exercise[] = [];

    private availableSubject: BehaviorSubject<Exercise[]> = new BehaviorSubject<Exercise[]>([]);
    availableSubject$: Observable<Exercise[]> = this.availableSubject.asObservable();

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
        this.exercises.push({ ...this.runningExercise, date: new Date(), state: 'completed' });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        this.exercises.push({
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

    getCompletedOrCancelledExercisers() {
        return this.exercises.slice();
    }
}
