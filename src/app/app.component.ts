import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild('sidenav', { static: true }) sidenav;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.initAuthListener();
    }
}
