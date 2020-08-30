import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../../../_services/auth.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../../app.reducer';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent implements OnInit {
    @Output() closeSidenav: EventEmitter<void> = new EventEmitter<void>();
    isAuth$: Observable<boolean>;
    authSubscription: Subscription;

    constructor(private authService: AuthService, private store: Store<fromRoot.State>) {}

    ngOnInit(): void {
        this.isAuth$ = this.store.select(fromRoot.getIsLoading);
    }

    onCloseSidenav() {
        this.closeSidenav.emit();
    }

    onLogout() {
        this.onCloseSidenav();
        this.authService.logout();
    }
}
