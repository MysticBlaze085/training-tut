import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { first } from 'rxjs/operators';
import { TrainingService } from '../_services/training.service';

@Injectable({ providedIn: 'root' })
export class FinishedExercisesResolver implements Resolve<Subscription> {
    constructor(private trainingServices: TrainingService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Subscription {
        return this.trainingServices
            .fetchCompletedOrCancelledExercises()
            .pipe(first())
            .subscribe(
                () => {},
                () => {}
            );
    }
}
