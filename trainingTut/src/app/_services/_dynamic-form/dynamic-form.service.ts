import { Injectable } from '@angular/core';
import { FormBase } from 'src/app/_classes/_dynamic-form';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class DynamicFormControlService {
    constructor() {}

    toFormGroup(formBase: FormBase<string>[]) {
        const group: any = {};

        formBase.forEach((input) => {
            group[input.key] = input.required ? new FormControl(input.value || '', input.validators) : new FormControl(input.value || '');
        });

        return new FormGroup(group);
    }
}
