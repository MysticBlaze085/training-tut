import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../modules/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AuthService, TrainingService } from '../_services';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
    declarations: [SignupComponent, LoginComponent],
    imports: [CommonModule, AuthRoutingModule, SharedModule, AngularFireAuthModule],
    exports: [SignupComponent, LoginComponent],
    providers: [AuthService, TrainingService],
})
export class AuthModule {}
