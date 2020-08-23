import { Injectable } from '@angular/core';
import { Exercise } from '../_interfaces/exercise.interface';
import { Subject } from 'rxjs';

@Injectable()
export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
    ];

    private runningExercise: Exercise;
    private exercises: Exercise[] = [];

    getAvailableExercises() {
        // calling slice creates new array without effecting original and can be modified
        return this.availableExercises.slice();
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
        const getCalDur = this.runningExercise.duration * (progress / 100);
        this.exercises.push({
            ...this.runningExercise,
            duration: getCalDur,
            calories: getCalDur,
            date: new Date(),
            state: 'cancelled',
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    getRunningExercise() {
        return { ...this.runningExercise };
    }
}
