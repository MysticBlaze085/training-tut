import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/_welcome/welcome.module').then((m) => m.WelcomeModule),
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'training',
        loadChildren: () => import('./modules/_training/training.module').then((m) => m.TrainingModule),
        canLoad: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard],
})
export class AppRoutingModule {}
