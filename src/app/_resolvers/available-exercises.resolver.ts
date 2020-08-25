import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import { TrainingService } from '../_services/training.service';

@Injectable({ providedIn: 'root' })
export class AvailableExercisesResolver implements Resolve<void> {
    constructor(private trainingServices: TrainingService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.trainingServices.fetchAvailableExercises();
    }
}
