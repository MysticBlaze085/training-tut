import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../../../_services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../../app.reducer';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();
    isAuth$: Observable<boolean>;
    authSubscription: Subscription;

    constructor(private authService: AuthService, private store: Store<fromRoot.State>) {}

    ngOnInit(): void {
        this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
    }

    onToggleSidenav() {
        this.sidenavToggle.emit();
    }

    onLogout() {
        this.authService.logout();
    }
}
