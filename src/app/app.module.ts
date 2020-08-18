import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponents } from './modules/shared';
@NgModule({
    declarations: [AppComponent, ...NavigationComponents],
    imports: [CommonModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, NgbModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
