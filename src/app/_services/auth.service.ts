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

    constructor(private router: Router, private afAuth: AngularFireAuth, private trainingService: TrainingService) {}

    registerUser(authData: AuthData) {
        this.afAuth
            .createUserWithEmailAndPassword(authData.emailAddress, authData.password)
            .then(() => {
                this.authStateRouter(true, '/training');
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    login(authData: AuthData) {
        this.afAuth
            .signInWithEmailAndPassword(authData.emailAddress, authData.password)
            .then(() => {
                this.authStateRouter(true, '/training');
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    logout() {
        this.afAuth.signOut();
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
