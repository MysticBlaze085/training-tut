import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../../_services/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent implements OnInit, OnDestroy {
    @Output() closeSidenav: EventEmitter<void> = new EventEmitter<void>();
    isAuth: boolean;
    authSubscription: Subscription;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authSubscription = this.authService.authChange.subscribe((authState) => (this.isAuth = authState));
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }

    onCloseSidenav() {
        this.closeSidenav.emit();
    }
}
