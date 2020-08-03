import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormBase, TextboxInput } from '../_classes/_dynamic-form';
import { FormControl, Validators, FormGroup } from '@angular/forms';

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
                validators: [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
                errorMessage: 'Please enter a valid Email address!',
                order: 1,
            }),
            new TextboxInput({
                key: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                validators: [Validators.required, Validators.minLength(8)],
                errorMessage: 'Please enter a password 8 characters long!',
                order: 1,
            }),
            new TextboxInput({
                key: 'confirmPassword',
                label: 'Confirm Password',
                type: 'password',
                required: true,
                validators: [Validators.required, Validators.minLength(8)],
                errorMessage: 'Please confirm password!',
                order: 1,
            }),
        ];

        return of(inputs.sort((a, b) => a.order - b.order));
    }
}
