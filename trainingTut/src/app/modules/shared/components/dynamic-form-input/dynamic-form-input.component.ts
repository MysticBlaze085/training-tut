import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from 'src/app/_classes/_dynamic-form';

@Component({
    selector: 'app-dynamic-form-input',
    templateUrl: './dynamic-form-input.component.html',
    styleUrls: ['./dynamic-form-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormInputComponent {
    @Input() inputs: FormBase<string>;
    @Input() form: FormGroup;
    @Input() classChanges: string;

    get isValid() {
        return this.form.controls[this.inputs.key].valid;
    }
}
