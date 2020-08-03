import { Injectable } from '@angular/core';
import { FormBase } from 'src/app/_classes/_dynamic-form';
import { FormControl, FormGroup } from '@angular/forms';

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

        return new FormGroup(group, this.passwordsMatchValidator);
    }

    private passwordsMatchValidator(form: FormGroup) {
        if (form.get('password') && form.get('confirmPassword')) {
            return form.get('password').value === form.get('confirmPassword').value ? null : { mismatch: true };
        }
        return null;
    }

    // create method for valid birthday cannot be passed todays date and cannot be younger than 18
}
