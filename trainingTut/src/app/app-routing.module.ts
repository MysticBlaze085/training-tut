import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'welcome/login', pathMatch: 'full' },
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
