import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from 'src/app/_classes/_dynamic-form';
import { DynamicFormControlService } from 'src/app/_services';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
    @Input() inputs: FormBase<string>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private dynFormCtrl: DynamicFormControlService) {}

    ngOnInit() {
        this.form = this.dynFormCtrl.toFormGroup(this.inputs);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
    }
}
