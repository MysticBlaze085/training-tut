import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [CommonModule, MaterialsModule, ReactiveFormsModule, FormsModule],
    exports: [MaterialsModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
