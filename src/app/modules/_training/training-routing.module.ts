import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailableExercisesResolver, FinishedExercisesResolver } from 'src/app/_resolvers';
import { TrainingComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        component: TrainingComponent,
        resolve: [AvailableExercisesResolver, FinishedExercisesResolver],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AvailableExercisesResolver, FinishedExercisesResolver],
})
export class TrainingRoutingModule {}
