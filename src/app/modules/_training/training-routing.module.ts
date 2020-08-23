import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentTrainingGuard } from 'src/app/_guards';
import { CurrentTrainingComponent, NewTrainingComponent, PastTrainingComponent } from './components';
import { TrainingComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        component: TrainingComponent,
        children: [
            {
                path: 'current-training',
                component: CurrentTrainingComponent,
                canActivate: [CurrentTrainingGuard],
                data: {
                    title: 'Current Training',
                },
            },
            {
                path: 'new-training',
                component: NewTrainingComponent,
                data: {
                    title: 'New Training',
                },
            },
            {
                path: 'past-training',
                component: PastTrainingComponent,
                data: {
                    title: 'Past Training',
                },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrainingRoutingModule {}
