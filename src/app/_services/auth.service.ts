import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthData, User } from '../_interfaces';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authChange = new Subject<boolean>();
    private user: User;

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString(),
        };
        this.authChange.next(true);
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString(),
        };
        this.authChange.next(true);
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
    }

    getUser() {
        // return new object and won't manipulate original user
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }
}
