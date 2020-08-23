import { DropdownInput, FormBase } from '../../../../_classes/_dynamic-form';
import { Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Exercise } from '../../../../_interfaces/exercise.interface';

export const getTrainingInputs = (exercises: Exercise[]) => {
    const mapExercises = exercises.map((e: Exercise) => ({
        key: e.id,
        value: e.name,
    }));

    const trainingList: FormBase<string>[] = [
        new DropdownInput({
            key: 'newTraining',
            label: 'Choose Exercise',
            required: true,
            validators: [Validators.required],
            options: [...mapExercises],
            errorMessage: 'Please select an exercise',
            class: 'w-100',
            order: 1,
        }),
    ];

    return of(trainingList.sort((a, b) => a.order - b.order));
};
