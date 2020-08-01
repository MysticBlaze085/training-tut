import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../modules/shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [SignupComponent, LoginComponent],
    imports: [CommonModule, AuthRoutingModule, SharedModule],
    exports: [SignupComponent, LoginComponent],
})
export class AuthModule {}
