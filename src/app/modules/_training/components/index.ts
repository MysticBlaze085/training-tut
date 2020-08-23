import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { StopTrainingModalComponent } from './current-training/stop-training-modal.component';

export const TRAINING_COMPONENTS = [CurrentTrainingComponent, NewTrainingComponent, PastTrainingComponent, StopTrainingModalComponent];
export const ENTRY_TRAINING_COMPONENTS = [StopTrainingModalComponent];

export * from './current-training/current-training.component';
export * from './new-training/new-training.component';
export * from './past-training/past-training.component';
export * from './current-training/stop-training-modal.component';
