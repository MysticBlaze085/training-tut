import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailableExercisesResolver } from 'src/app/_resolvers';
import { TrainingComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        component: TrainingComponent,
        resolve: [AvailableExercisesResolver],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AvailableExercisesResolver],
})
export class TrainingRoutingModule {}
