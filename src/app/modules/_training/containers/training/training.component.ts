import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from 'src/app/_services';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/_interfaces';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
})
export class TrainingComponent implements OnInit, OnDestroy {
    onGoindTraining$: Observable<boolean>;
    availableExercises$: Observable<Exercise[]>;
    finishedExercises$: Observable<Exercise[]>;

    constructor(private trainingService: TrainingService) {}

    ngOnInit() {
        this.onGoindTraining$ = this.trainingService.exerciseChanged$;
        this.availableExercises$ = this.trainingService.availableSubject$;
        this.finishedExercises$ = this.trainingService.finishedExercises$;
    }

    ngOnDestroy() {
        this.trainingService.cancelSubscriptions();
    }

    onTrainingStart({ id }: Exercise) {
        this.trainingService.startExercise(id);
    }
}
