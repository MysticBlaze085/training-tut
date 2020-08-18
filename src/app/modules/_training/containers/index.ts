import { TrainingComponent } from '../../_training/containers/training/training.component';
import { CurrentTrainingComponent } from '../components/current-training/current-training.component';
import { NewTrainingComponent } from '../components/new-training/new-training.component';
import { PastTrainingComponent } from '../components/past-training/past-training.component';

export const TRAINING_CONTAINERS = [TrainingComponent, CurrentTrainingComponent, NewTrainingComponent, PastTrainingComponent];

export * from '../../_training/containers/training/training.component';
export * from '../components/current-training/current-training.component';
export * from '../components/new-training/new-training.component';
export * from '../components/past-training/past-training.component';
