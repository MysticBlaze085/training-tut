import { NgModule } from '@angular/core';

import { TrainingRoutingModule } from './training-routing.module';
import { ENTRY_TRAINING_COMPONENTS, TRAINING_COMPONENTS } from './components';
import { TRAINING_CONTAINERS } from './containers';
import { SharedModule } from '../shared/shared.module';
import { TrainingService } from '../../_services/training.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AvailableExercisesResolver, FinishedExercisesResolver } from 'src/app/_resolvers';
import { AuthService } from 'src/app/_services';

import { StoreModule } from '@ngrx/store';
import { trainingReducer } from './training.reducer';

@NgModule({
    declarations: [...TRAINING_COMPONENTS, ...TRAINING_CONTAINERS],
    imports: [SharedModule, TrainingRoutingModule, AngularFirestoreModule, StoreModule.forFeature('training', trainingReducer)],
    exports: [...TRAINING_COMPONENTS, ...TRAINING_CONTAINERS],
    providers: [AuthService, TrainingService, AvailableExercisesResolver, FinishedExercisesResolver],
    entryComponents: [...ENTRY_TRAINING_COMPONENTS],
})
export class TrainingModule {}
