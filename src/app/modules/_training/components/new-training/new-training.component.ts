import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBase } from '../../../../_classes/_dynamic-form/form-base.class';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlService, TrainingService } from 'src/app/_services';

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

    constructor(private trainingService: TrainingService, private dynFormCtrl: DynamicFormControlService) {}

    ngOnInit(): void {
        this.inputs$ = this.trainingService.getTrainingList().subscribe((inputs: FormBase<string>[]) => {
            this.inputs = inputs;
            this.form = this.dynFormCtrl.toFormGroup(inputs);
        });
    }

    onStartTraining() {
        this.trainingStart.emit();
    }
}
