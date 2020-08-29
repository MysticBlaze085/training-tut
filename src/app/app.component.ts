import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './_services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild('sidenav', { static: true }) sidenav;

    constructor(private authService: AuthService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.authService.initAuthListener();
    }
}
