import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { of } from 'rxjs';
import { FormBase, TextboxInput } from '../_classes/_dynamic-form';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
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
                order: 3,
            }),
        ];

        return of(inputs.sort((a, b) => a.order - b.order));
    }
}
