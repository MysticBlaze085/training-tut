import { Injectable } from '@angular/core';
import { Exercise } from '../_interfaces/exercise.interface';

@Injectable()
export class TrainingService {
    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
    ];

    private runningExercise: Exercise;

    getAvailableExercises() {
        // calling slice creates new array without effecting original and can be modified
        return this.availableExercises.slice();
    }

    startExercise(selectedId: string): void {
        const selectedExercise = this.availableExercises.find((ex) => ex.id === selectedId);
        this.runningExercise = selectedExercise;
    }
}
