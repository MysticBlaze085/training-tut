import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DatePickerInput, FormBase, TextboxInput } from '../_classes/_dynamic-form';
import { Validators } from '@angular/forms';
import { CheckboxInput } from '../_classes/_dynamic-form/checkbox.class';

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
            new DatePickerInput({
                key: 'dateOfBirth',
                label: 'Date of Birth',
                type: 'datepicker',
                required: true,
                validators: [Validators.required],
                errorMessage: 'Please enter your date of birth!',
                order: 2,
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
            new TextboxInput({
                key: 'confirmPassword',
                label: 'Confirm Password',
                type: 'password',
                required: true,
                validators: [Validators.required, Validators.minLength(8)],
                errorMessage: 'Please confirm password!',
                order: 4,
            }),
            new CheckboxInput({
                key: 'agreeTerms',
                label: 'Agree to Terms and Conditions',
                type: 'checkbox',
                required: true,
                validators: [Validators.required],
                errorMessage: 'Must agree to terms and conditions!',
                labelPosition: 'before',
                class: 'text-center',
                order: 5,
            }),
        ];

        return of(inputs.sort((a, b) => a.order - b.order));
    }
}
