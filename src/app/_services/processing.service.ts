import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Processing } from '../_interfaces';

@Injectable({
    providedIn: 'root',
})
export class ProcessingService {
    constructor(private spinner: NgxSpinnerService) {}

    on(config?: Processing) {
        this.spinner.show(undefined, {
            type: config && config.type ? config.type : 'fire',
            size: config && config.size ? config.size : 'large',
            bdColor: config && config.bdColor ? config.bdColor : 'rgba(0, 0, 0, 0.5)',
            color: config && config.color ? config.color : 'white',
            fullScreen: true,
        });
    }

    off() {
        this.spinner.hide();
    }
}
