import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTrainingComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
