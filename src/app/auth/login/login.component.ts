import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBase } from 'src/app/_classes/_dynamic-form';
import { DynamicFormControlService } from 'src/app/_services';
import { LoginService } from 'src/app/_services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
    inputs$: Subscription;
    inputs: FormBase<string>[] = [];
    buttonText = 'Submit';
    class: string;
    form: FormGroup;
    payLoad = '';

    comparePassword;

    constructor(private loginService: LoginService, private dynFormCtrl: DynamicFormControlService) {}

    ngOnInit() {
        this.inputs$ = this.loginService.getSignupInputs().subscribe((inputs: FormBase<string>[]) => {
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
