import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingModalComponent } from './stop-training-modal.component';

@Component({
    selector: 'app-current-training',
    templateUrl: './current-training.component.html',
    styleUrls: ['./current-training.component.scss'],
})
export class CurrentTrainingComponent implements OnInit {
    @Output() trainingExit = new EventEmitter();

    progress = 0;
    timer: number;

    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {
        this.startOrResumeTimer();
    }

    startOrResumeTimer() {
        this.timer = setInterval(() => {
            this.progress = this.progress + 5;
            if (this.progress >= 100) {
                clearInterval(this.timer);
            }
        }, 1000);
    }

    onStop() {
        clearInterval(this.timer);
        const dialogRef = this.dialog.open(StopTrainingModalComponent, {
            data: {
                progress: this.progress,
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
            if (result) {
                this.trainingExit.emit();
            } else {
                this.startOrResumeTimer();
            }
        });
    }
}
