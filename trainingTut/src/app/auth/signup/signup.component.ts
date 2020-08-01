import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBase } from 'src/app/_classes/_dynamic-form';
import { FormulaInputConfig } from 'src/app/_interfaces';
import { SignupService } from 'src/app/_services';
import { SignUpInputs } from './signup-config';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
    inputs$: Observable<FormBase<any>[]>;

    constructor(public signupFormService: SignupService) {}

    ngOnInit(): void {
        this.inputs$ = this.signupFormService.getSignupInputs();
    }
}
