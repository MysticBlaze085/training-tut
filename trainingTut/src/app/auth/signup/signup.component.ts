import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBase } from 'src/app/_classes/_dynamic-form';
import { ComparePasswordPipe } from 'src/app/_pipes/compare-password.pipe';
import { DynamicFormControlService, SignupService } from 'src/app/_services';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styles: [],
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

    constructor(private signupFormService: SignupService, private dynFormCtrl: DynamicFormControlService) {}

    ngOnInit() {
        this.inputs$ = this.signupFormService.getSignupInputs().subscribe((inputs: FormBase<string>[]) => {
            this.inputs = inputs;
            this.form = this.dynFormCtrl.toFormSignUpGroup(inputs);
        });
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
    }

    ngOnDestroy() {
        this.inputs$.unsubscribe();
    }
}
