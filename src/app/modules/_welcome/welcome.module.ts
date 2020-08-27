import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { ENTRY_WELCOME_COMPONENTS, WELCOME_CONTAINERS } from './containers';
import { WELCOME_COMPONENTS } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [...WELCOME_CONTAINERS, ...WELCOME_COMPONENTS],
    imports: [CommonModule, WelcomeRoutingModule, SharedModule],
    exports: [...WELCOME_CONTAINERS, ...WELCOME_COMPONENTS],
    entryComponents: [ENTRY_WELCOME_COMPONENTS],
})
export class WelcomeModule {}
