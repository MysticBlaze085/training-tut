import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBase } from 'src/app/_classes/_dynamic-form';
import { DynamicFormControlService } from 'src/app/_services';
import { AuthService } from '../../_services/auth.service';
import { getLoginInputs } from './login.config';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
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

    constructor(private authService: AuthService, private dynFormCtrl: DynamicFormControlService) {}

    ngOnInit() {
        this.inputs$ = getLoginInputs().subscribe((inputs: FormBase<string>[]) => {
            this.inputs = inputs;
            this.form = this.dynFormCtrl.toFormGroup(inputs);
        });
    }

    onSubmit() {
        const { emailAddress, password } = this.form.value;
        this.authService.login({ emailAddress, password });
    }

    ngOnDestroy() {
        this.inputs$.unsubscribe();
    }
}
