import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBase } from 'src/app/_classes/_dynamic-form';
import { DynamicFormControlService, SignupService } from 'src/app/_services';
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

    constructor(private signupFormService: SignupService, private dynFormCtrl: DynamicFormControlService) {}

    ngOnInit() {
        this.inputs$ = this.signupFormService.getSignupInputs().subscribe((inputs: FormBase<string>[]) => {
            this.inputs = inputs;
            this.form = this.dynFormCtrl.toFormGroup(inputs);
        });
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
    }

    ngOnDestroy() {
        this.inputs$.unsubscribe();
    }
}