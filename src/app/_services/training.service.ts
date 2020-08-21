import { Injectable } from '@angular/core';
import { FormBase } from '../_classes/_dynamic-form/form-base.class';
import { DropdownInput } from '../_classes/_dynamic-form/dropdown.class';
import { Observable, of } from 'rxjs';
import { Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class TrainingService {
    getTrainingList(): Observable<FormBase<string>[]> {
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
    }
}
