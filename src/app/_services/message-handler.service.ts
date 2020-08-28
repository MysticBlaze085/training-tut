import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class MessageHandlerService {
    constructor(private snackBar: MatSnackBar) {}

    openMessageHandler(
        messageTypeClass: string,
        message: string,
        actionLabel: string,
        xAxis?: MatSnackBarHorizontalPosition,
        yAxis?: MatSnackBarVerticalPosition
    ) {
        const horizontalPosition = xAxis ? xAxis : 'center';
        const verticalPosition = yAxis ? yAxis : 'bottom';
        const panelClass = [messageTypeClass];
        this.snackBar.open(message, actionLabel, {
            duration: 6000,
            horizontalPosition,
            verticalPosition,
            panelClass,
        });
    }
}
