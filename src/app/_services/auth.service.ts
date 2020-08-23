import { Injectable } from '@angular/core';
import { AuthData, User } from '../_interfaces';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private user: User;

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString(),
        };
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString(),
        };
    }

    logout() {
        this.user = null;
    }

    getUser() {
        // return new object and won't manipulate original user
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }
}
