import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CurrentTrainingGuard implements CanActivate {
    canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
        console.log('next', next);

        return of(true);
    }
}
