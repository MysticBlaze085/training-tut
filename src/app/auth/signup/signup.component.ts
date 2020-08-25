import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBase } from 'src/app/_classes/_dynamic-form';
import { DynamicFormControlService } from 'src/app/_services';
import { AuthService } from '../../_services/auth.service';
import { getSignupInputs } from './signup.config';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit, OnDestroy {
    inputs$: Subscription;
    inputs: FormBase<string>[] = [];
    buttonText = 'Submit';
    class: string;
    form: FormGroup;
    payLoad = '';

    comparePassword;

    constructor(private authService: AuthService, private dynFormCtrl: DynamicFormControlService) {}

    ngOnInit() {
        this.inputs$ = getSignupInputs().subscribe((inputs: FormBase<string>[]) => {
            this.inputs = inputs;
            this.form = this.dynFormCtrl.toFormGroup(inputs);
        });
        console.log('form', this.form.value);

        this.form.patchValue({
            emailAddress: 'test@example.com',
            dateOfBirth: '1973-06-17T05:00:00.000Z',
            password: 'password',
            confirmPassword: 'password',
            agreeTerms: true,
        });
    }

    onSubmit() {
        const { email, password } = this.form.value;
        this.authService.registerUser({ email, password });

        this.payLoad = JSON.stringify(this.form.getRawValue());
    }

    ngOnDestroy() {
        this.inputs$.unsubscribe();
    }
}
