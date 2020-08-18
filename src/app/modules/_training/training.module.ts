import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TRAINING_COMPONENTS } from './components';
import { TRAINING_CONTAINERS } from './containers';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [...TRAINING_COMPONENTS, ...TRAINING_CONTAINERS],
    imports: [CommonModule, TrainingRoutingModule, SharedModule],
    exports: [...TRAINING_COMPONENTS, ...TRAINING_CONTAINERS],
})
export class TrainingModule {}