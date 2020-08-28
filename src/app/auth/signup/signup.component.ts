import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBase } from 'src/app/_classes/_dynamic-form';
import { AuthService, DynamicFormControlService } from 'src/app/_services';
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
    }

    onSubmit() {
        const { emailAddress, password } = this.form.value;
        this.authService.registerUser({ emailAddress, password });
    }

    ngOnDestroy() {
        this.inputs$.unsubscribe();
    }
}
