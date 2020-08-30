import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormInputComponent, MaterialsModule } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [DynamicFormInputComponent],
    imports: [CommonModule, MaterialsModule, ReactiveFormsModule, FormsModule, FlexLayoutModule],
    exports: [CommonModule, MaterialsModule, ReactiveFormsModule, FormsModule, FlexLayoutModule, DynamicFormInputComponent],
})
export class SharedModule {}
