import { Component, OnInit, OnDestroy } from '@angular/core';
import { Exercise } from 'src/app/_interfaces';
import { TrainingService } from 'src/app/_services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit, OnDestroy {
    onGoindTraining: boolean;
    availableExercises: Exercise[];
    exerciseSubscription: Subscription;

    constructor(private trainingService: TrainingService) {}

    ngOnInit() {
        this.availableExercises = this.trainingService.getAvailableExercises();
        this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe((exercise) => {
            this.onGoindTraining = exercise ? true : false;
        });
    }

    ngOnDestroy() {
        this.exerciseSubscription.unsubscribe();
    }

    onTrainingStart({ id }) {
        this.trainingService.startExercise(id);
    }
}
