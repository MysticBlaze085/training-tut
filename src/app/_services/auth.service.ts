import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AuthData } from '../_interfaces';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessageHandlerService } from './message-handler.service';
import { ProcessingService } from './processing.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as UI from '../modules/shared/ui.actions';
import * as Auth from '../auth/auth.actions';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private messageHandglerService: MessageHandlerService,
        private process: ProcessingService,
        private store: Store<fromRoot.State>
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

    private authStateRouter(state: boolean, route: string) {
        this.isLoadingState(state);
        this.authenticatedState(state);
        this.router.navigate([`${route}`]);
    }

    private authenticatedState(state: boolean) {
        const authState = state ? new Auth.SetAuthenticated() : new Auth.SetUnauthenticated();
        return this.store.dispatch(authState);
    }
    private isLoadingState(state: boolean) {
        const loadingState = state ? new UI.StartLoading() : new UI.StopLoading();
        return this.store.dispatch(loadingState);
    }
}
