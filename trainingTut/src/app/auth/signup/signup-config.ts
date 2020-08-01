import { EmailValidator, Validators } from '@angular/forms';
import { FormulaInputConfig } from 'src/app/_interfaces';

export const SignUpInputs: FormulaInputConfig[] = [
    {
        type: 'email',
        group: 'general',
        controller: 'email',
        name: 'Email',
        validators: [Validators.required, EmailValidator],
        class: 'col-12',
    },
    {
        type: 'password',
        group: 'general',
        controller: 'password',
        name: 'Password',
        validators: [Validators.required],
        class: 'col-12',
    },
];
