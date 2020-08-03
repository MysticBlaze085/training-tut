import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentTrainingComponent } from './components';
import { TrainingComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        component: TrainingComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrainingRoutingModule {}
