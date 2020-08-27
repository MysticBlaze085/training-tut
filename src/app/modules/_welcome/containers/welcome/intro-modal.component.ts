import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-intro-modal',
    template: `<h1 mat-dialog-title>{{ passedData.title }}</h1>
        <mat-dialog-content fxLayoutAlign="center center">
            <p>{{ passedData.content }}</p>
        </mat-dialog-content>
        <mat-dialog-actions fxLayoutAlign="center center">
            <button mat-raised-button color="primary" [mat-dialog-close]="'login/signup'">Signup</button>
            <button mat-raised-button color="accent" [mat-dialog-close]="'/login'">Login</button>
        </mat-dialog-actions> `,
})
export class IntroModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}
