import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-past-training',
    templateUrl: './past-training.component.html',
    styleUrls: ['./past-training.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PastTrainingComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
