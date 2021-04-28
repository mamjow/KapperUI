import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, } from './app-routing.module';

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';

import { DatePipe } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationItemComponent } from './navigation/navigation-item/navigation-item.component';
import { LogoutComponent } from './logout/logout.component';
import { DateblockComponent } from './reserve-dashboard/dateblock/dateblock.component';
import { TimeblockComponent } from './reserve-dashboard/dateblock/timeblock/timeblock.component';
import { ReserveDashboardComponent } from './reserve-dashboard/reserve-dashboard.component';
import { ENumToStringPipe } from './services/enumToString.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFeedBackComponent } from './registration/register-feed-back/register-feed-back.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ReservarionCancelingApprovalComponent } from './reserve-dashboard/dateblock/timeblock/reservarion-canceling-approval/reservarion-canceling-approval.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NavigationItemComponent,
    LogoutComponent,
    DateblockComponent,
    TimeblockComponent,
    ReserveDashboardComponent,
   // routingComponents,
   ENumToStringPipe,
   RegistrationComponent,
   RegisterFeedBackComponent,
   ReservarionCancelingApprovalComponent,

  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    CookieService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
