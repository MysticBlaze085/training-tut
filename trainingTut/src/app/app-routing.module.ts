import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    {
        path: 'signup',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'training',
        loadChildren: () => import('./modules/_training/training.module').then((m) => m.TrainingModule),
    },
    {
        path: 'welcome',
        loadChildren: () => import('./modules/_welcome/welcome.module').then((m) => m.WelcomeModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
