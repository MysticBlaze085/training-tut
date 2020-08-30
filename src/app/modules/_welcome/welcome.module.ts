import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WELCOME_CONTAINERS } from './containers';
import { WELCOME_COMPONENTS } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [...WELCOME_CONTAINERS, ...WELCOME_COMPONENTS],
    imports: [SharedModule, WelcomeRoutingModule],
    exports: [...WELCOME_CONTAINERS, ...WELCOME_COMPONENTS],
})
export class WelcomeModule {}
