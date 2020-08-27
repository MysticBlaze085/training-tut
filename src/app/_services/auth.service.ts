import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthData } from '../_interfaces';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { TrainingService } from './training.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated: boolean;

    constructor(private router: Router, private afAuth: AngularFireAuth) {}

    initAuthListener() {
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.authStateRouter(true, '/training');
            } else {
                this.authStateRouter(false, '/login');
            }
        });
    }

    registerUser(authData: AuthData) {
        this.afAuth
            .createUserWithEmailAndPassword(authData.emailAddress, authData.password)
            .then(() => {})
            .catch((error) => {
                alert(error.message);
            });
    }

    login(authData: AuthData) {
        this.afAuth
            .signInWithEmailAndPassword(authData.emailAddress, authData.password)
            .then(() => {})
            .catch((error) => {
                alert(error.message);
            });
    }

    logout() {
        this.afAuth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }

    private authStateRouter(state: boolean, route: string) {
        this.isAuthenticated = state;
        this.authChange.next(state);
        this.router.navigate([`${route}`]);
    }
}
