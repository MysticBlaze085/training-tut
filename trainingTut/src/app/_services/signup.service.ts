import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormBase, TextboxInput } from '../_classes/_dynamic-form';
import { Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class SignupService {
    getSignupInputs() {
        const inputs: FormBase<string>[] = [
            new TextboxInput({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                required: true,
                validators: [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')],
                order: 1,
            }),
            new TextboxInput({
                key: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                validators: [Validators.required],
                order: 1,
            }),
        ];

        return of(inputs.sort((a, b) => a.order - b.order));
    }
}
