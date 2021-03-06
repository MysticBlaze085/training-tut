import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { ProcessingService, TrainingService } from '../_services';

@Injectable({ providedIn: 'root' })
export class FinishedExercisesResolver implements Resolve<Subscription> {
    constructor(private trainingServices: TrainingService, private process: ProcessingService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Subscription {
        this.process.on();
        return this.trainingServices.fetchCompletedOrCancelledExercises();
    }
}
