import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBase } from '../../../../_classes/_dynamic-form/form-base.class';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlService } from 'src/app/_services';
import { getTrainingInputs } from './training.config';
import { Exercise } from '../../../../_interfaces/exercise.interface';
@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnChanges {
    @Input() exercises: Exercise[] = [];
    @Output() trainingStart: EventEmitter<any> = new EventEmitter();

    inputs$: Subscription;
    inputs: FormBase<string>[] = [];
    form: FormGroup;
    class = 'w-100';

    constructor(private dynFormCtrl: DynamicFormControlService) {}

    ngOnChanges({ exercises }: SimpleChanges) {
        if (exercises && this.exercises) {
            this.inputs$ = getTrainingInputs(this.exercises).subscribe((inputs: FormBase<string>[]) => {
                this.inputs = inputs;
                this.form = this.dynFormCtrl.toFormGroup(inputs);
            });
        }
    }

    onStartTraining() {
        console.log('form', this.form.value);
        const { newTraining } = this.form.value;
        this.trainingStart.emit({ id: newTraining });
    }
}
