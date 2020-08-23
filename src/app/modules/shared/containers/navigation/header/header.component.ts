import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../../_services/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();
    isAuth: boolean;
    authSubscription: Subscription;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authSubscription = this.authService.authChange.subscribe((authStatus) => (this.isAuth = authStatus));
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }

    onToggleSidenav() {
        this.sidenavToggle.emit();
    }
}
