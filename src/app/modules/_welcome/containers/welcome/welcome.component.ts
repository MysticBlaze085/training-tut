import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IntroModalComponent } from './intro-modal.component';
import { AuthService } from '../../../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent implements OnInit {
    constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.authService.authChange.subscribe((auth) => {
            if (!auth) {
                this.onLoad();
            }
        });
    }

    onLoad() {
        const dialogRef = this.dialog.open(IntroModalComponent, {
            data: {
                title: 'Welcome to Training Demo',
                content: 'Signup and get started!',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.router.navigate([`${result}`]);
        });
    }
}
