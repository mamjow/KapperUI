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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NavigationItemComponent,
    LogoutComponent,
    DateblockComponent,
    TimeblockComponent,
   // routingComponents,
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
