import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from 'src/app/_services';
import { Observable, Subscription } from 'rxjs';
import { Exercise } from 'src/app/_interfaces';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit, OnDestroy {
    onGoindTraining: boolean;
    availableExercises$: Observable<Exercise[]>;
    finishedExercises$: Observable<Exercise[]>;
    exerciseSubscription: Subscription;

    constructor(private trainingService: TrainingService) {}

    ngOnInit() {
        this.availableExercises$ = this.trainingService.availableSubject$;
        this.finishedExercises$ = this.trainingService.finishedExercises$;
        this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe((exercise) => {
            this.onGoindTraining = exercise ? true : false;
        });
    }

    ngOnDestroy() {
        this.exerciseSubscription.unsubscribe();
        this.trainingService.cancelSubscriptions();
    }

    onTrainingStart({ id }) {
        this.trainingService.startExercise(id);
    }
}
