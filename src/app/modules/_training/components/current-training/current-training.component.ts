import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingModalComponent } from './stop-training-modal.component';
import { TrainingService } from 'src/app/_services';
import { Store } from '@ngrx/store';
import * as fromTraining from '../../training.reducer';
import { take } from 'rxjs/operators';
@Component({
    selector: 'app-current-training',
    templateUrl: './current-training.component.html',
    styleUrls: ['./current-training.component.scss'],
})
export class CurrentTrainingComponent implements OnInit {
    progress = 0;
    timer: number;

    constructor(private dialog: MatDialog, private trainingService: TrainingService, private store: Store<fromTraining.State>) {}

    ngOnInit(): void {
        this.startOrResumeTimer();
    }

    startOrResumeTimer() {
        this.store
            .select(fromTraining.getActiveTraining)
            .pipe(take(1))
            .subscribe((ex) => {
                const step = (ex.duration / 100) * 1000;
                this.timer = setInterval(() => {
                    this.progress = this.progress + 5;
                    if (this.progress >= 100) {
                        this.trainingService.completeExercise();
                        clearInterval(this.timer);
                    }
                }, step);
            });
    }

    onStop() {
        clearInterval(this.timer);
        const dialogRef = this.dialog.open(StopTrainingModalComponent, {
            data: {
                progress: this.progress,
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            return result ? this.trainingService.cancelExercise(this.progress) : this.startOrResumeTimer();
        });
    }
}
