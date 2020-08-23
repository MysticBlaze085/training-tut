import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthData, User } from '../_interfaces';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authChange = new Subject<boolean>();
    private user: User;

    constructor(private router: Router) {}

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString(),
        };
        this.authStateRouter(true, '/training');
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString(),
        };
        this.authStateRouter(true, '/training');
    }

    logout() {
        this.user = null;
        this.authStateRouter(false, '/login');
    }

    getUser() {
        // return new object and won't manipulate original user
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }

    private authStateRouter(state: boolean, route: string) {
        this.authChange.next(state);
        this.router.navigate([`${route}`]);
    }
}
