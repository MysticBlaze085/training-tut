import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { ENTRY_TRAINING_COMPONENTS, TRAINING_COMPONENTS } from './components';
import { TRAINING_CONTAINERS } from './containers';
import { SharedModule } from '../shared/shared.module';
import { TrainingService } from '../../_services/training.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    declarations: [...TRAINING_COMPONENTS, ...TRAINING_CONTAINERS],
    imports: [CommonModule, TrainingRoutingModule, AngularFirestoreModule, SharedModule],
    exports: [...TRAINING_COMPONENTS, ...TRAINING_CONTAINERS],
    providers: [TrainingService],
    entryComponents: [...ENTRY_TRAINING_COMPONENTS],
})
export class TrainingModule {}
