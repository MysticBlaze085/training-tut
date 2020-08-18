import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [],
    imports: [CommonModule, MaterialsModule, ReactiveFormsModule, FormsModule, FlexLayoutModule],
    exports: [MaterialsModule, ReactiveFormsModule, FormsModule, FlexLayoutModule],
})
export class SharedModule {}
