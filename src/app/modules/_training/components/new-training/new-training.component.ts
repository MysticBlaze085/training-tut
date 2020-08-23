import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBase } from '../../../../_classes/_dynamic-form/form-base.class';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlService } from 'src/app/_services';
import { getTrainingInputs } from './training.config';
@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit {
    @Output() trainingStart: EventEmitter<any> = new EventEmitter();

    inputs$: Subscription;
    inputs: FormBase<string>[] = [];
    form: FormGroup;
    class = 'w-100';

    constructor(private dynFormCtrl: DynamicFormControlService) {}

    ngOnInit(): void {
        this.inputs$ = getTrainingInputs().subscribe((inputs: FormBase<string>[]) => {
            this.inputs = inputs;
            this.form = this.dynFormCtrl.toFormGroup(inputs);
        });
    }

    onStartTraining() {
        this.trainingStart.emit();
    }
}
