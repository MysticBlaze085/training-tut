import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingModalComponent } from './stop-training-modal.component';
import { TrainingService } from 'src/app/_services';

@Component({
    selector: 'app-current-training',
    templateUrl: './current-training.component.html',
    styleUrls: ['./current-training.component.scss'],
})
export class CurrentTrainingComponent implements OnInit {
    progress = 0;
    timer: number;

    constructor(private dialog: MatDialog, private trainingService: TrainingService) {}

    ngOnInit(): void {
        this.startOrResumeTimer();
    }

    startOrResumeTimer() {
        const step = (this.trainingService.getRunningExercise().duration / 100) * 1000;
        this.timer = setInterval(() => {
            this.progress = this.progress + 5;
            if (this.progress >= 100) {
                this.trainingService.completeExercise();
                clearInterval(this.timer);
            }
        }, step);
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
