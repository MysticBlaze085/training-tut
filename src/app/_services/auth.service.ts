import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthData } from '../_interfaces';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessageHandlerService } from './message-handler.service';
import { ProcessingService } from './processing.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated: boolean;

    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private messageHandglerService: MessageHandlerService,
        private process: ProcessingService,
        private store: Store<{ ui: fromApp.State }>
    ) {}

    initAuthListener() {
        this.afAuth.authState.subscribe((user) => {
            user ? this.authStateRouter(true, '/training') : this.authStateRouter(false, '');
        });
    }

    registerUser(authData: AuthData) {
        this.process.on();
        this.afAuth
            .createUserWithEmailAndPassword(authData.emailAddress, authData.password)
            .then(() => {})
            .catch((error) => {
                this.process.off();
                this.messageHandglerService.openMessageHandler('error-handler', error.message, 'Error', 3000);
            });
    }

    login(authData: AuthData) {
        this.process.on();
        this.afAuth
            .signInWithEmailAndPassword(authData.emailAddress, authData.password)
            .then(() => {})
            .catch((error) => {
                this.process.off();
                this.messageHandglerService.openMessageHandler('error-handler', error.message, 'Error', 3000);
            });
    }

    logout() {
        this.afAuth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }

    private authStateRouter(state: boolean, route: string) {
        const authChangeState = state ? 'START_LOADING' : 'STOP_LOADING';
        this.isAuthenticated = state;
        this.store.dispatch({ type: `${authChangeState}` });
        this.router.navigate([`${route}`]);
    }
}
