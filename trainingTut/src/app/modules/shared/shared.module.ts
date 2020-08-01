import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '.';

@NgModule({
    declarations: [],
    imports: [CommonModule, MaterialsModule],
    exports: [MaterialsModule],
})
export class SharedModule {}
