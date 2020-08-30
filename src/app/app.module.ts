import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialsModule, NavigationComponents } from './modules/shared';
import { AuthService, MessageHandlerService, ProcessingService, TrainingService } from './_services';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';
@NgModule({
    declarations: [AppComponent, ...NavigationComponents],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialsModule,
        FlexLayoutModule,
        NgbModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        NgxSpinnerModule,
        StoreModule.forRoot(reducers),
    ],
    providers: [AuthService, TrainingService, MessageHandlerService, ProcessingService],
    bootstrap: [AppComponent],
})
export class AppModule {}
