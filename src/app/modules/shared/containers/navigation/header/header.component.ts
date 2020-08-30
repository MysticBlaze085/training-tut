import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../../../_services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../app.reducer';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();
    isAuth$: Observable<boolean>;
    authSubscription: Subscription;

    constructor(private authService: AuthService, private store: Store<{ ui: fromApp.State }>) {}

    ngOnInit(): void {
        this.isAuth$ = this.store.pipe(map((data) => data.ui.isAuthenticated));
    }

    onToggleSidenav() {
        this.sidenavToggle.emit();
    }

    onLogout() {
        this.authService.logout();
    }
}
