import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormBase, TextboxInput } from '../_classes/_dynamic-form';

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
                order: 1,
            }),
            new TextboxInput({
                key: 'password',
                label: 'Password',
                type: 'password',
                order: 1,
            }),
        ];

        return of(inputs.sort((a, b) => a.order - b.order));
    }
}
