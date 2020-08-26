import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthData, User } from '../_interfaces';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated: boolean;

    constructor(private router: Router, private afAuth: AngularFireAuth) {}

    registerUser(authData: AuthData) {
        console.log(authData);

        this.afAuth
            .createUserWithEmailAndPassword(authData.emailAddress, authData.password)
            .then((result) => {
                console.log('auth res', result);
                this.authStateRouter(true, '/training');
            })
            .catch((error) => {
                console.log('auth error', error);
                alert(error.message);
            });
    }

    login(authData: AuthData) {
        this.afAuth
            .signInWithEmailAndPassword(authData.emailAddress, authData.password)
            .then((result) => {
                console.log('auth res', result);
                this.authStateRouter(true, '/training');
            })
            .catch((error) => {
                console.log('auth error', error);
                alert(error.message);
            });
    }

    logout() {
        this.authStateRouter(false, '/login');
        this.isAuthenticated = false;
    }

    isAuth() {
        return this.isAuthenticated;
    }

    private authStateRouter(state: boolean, route: string) {
        this.isAuthenticated = true;
        this.authChange.next(state);
        this.router.navigate([`${route}`]);
    }
}
