import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private router: Router, private store: Store<fromRoot.State>) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let isAuthenticate: boolean;
        this.store.select(fromRoot.getIsAuthenticated).subscribe((auth) => (isAuthenticate = auth));
        return isAuthenticate ? true : this.router.navigate(['']);
    }

    canLoad(route: Route) {
        let isAuthenticate: boolean;
        this.store.select(fromRoot.getIsAuthenticated).subscribe((auth) => (isAuthenticate = auth));

        return isAuthenticate ? true : this.router.navigate(['']);
    }
}
