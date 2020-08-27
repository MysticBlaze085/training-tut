import { WelcomeComponent } from './welcome/welcome.component';
import { IntroModalComponent } from '../containers/welcome/intro-modal.component';

export const WELCOME_CONTAINERS = [WelcomeComponent, IntroModalComponent];
export const ENTRY_WELCOME_COMPONENTS = [IntroModalComponent];

export * from './welcome/welcome.component';
export * from '../containers/welcome/intro-modal.component';
