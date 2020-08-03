import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'login',
        loadChildren: () => import('../../auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '/login/signup',
        loadChildren: () => import('../../auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'training',
        loadChildren: () => import('../_training/training.module').then((m) => m.TrainingModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WelcomeRoutingModule {}
