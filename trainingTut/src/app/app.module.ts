import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
