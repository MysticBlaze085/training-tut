import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/_interfaces';
import { TrainingService } from 'src/app/_services';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
    onGoindTraining: boolean;
    availableExercises: Exercise[];

    constructor(private trainingService: TrainingService) {}

    ngOnInit() {
        this.availableExercises = this.trainingService.getAvailableExercises();
    }

    onTrainingStart({ id }) {
        this.trainingService.startExercise(id);
        this.onGoindTraining = true;
    }
}
