import { DropdownInput, FormBase } from '../../../../_classes/_dynamic-form';
import { Validators } from '@angular/forms';
import { of } from 'rxjs';

export const getTrainingInputs = () => {
    const trainingList: FormBase<string>[] = [
        new DropdownInput({
            key: 'newTraining',
            label: 'Select Training',
            required: true,
            validators: [Validators.required],
            options: [
                { key: 'crunches', value: 'Crunches' },
                { key: 'touch-toes', value: 'Touch Toes' },
                { key: 'burpees', value: 'Burpees' },
                { key: 'pain', value: 'Torchering Mechanism' },
            ],
            errorMessage: 'Please select training',
            class: 'w-100',
            order: 1,
        }),
    ];

    return of(trainingList.sort((a, b) => a.order - b.order));
};
