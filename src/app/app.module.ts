import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TabbarComponent } from './tabbar/tabbar.component';
import { IndexComponent } from './home/index/index.component';
import { HomeComponent } from './home/home/home.component';
import { PromoComponent } from './promo/promo/promo.component';
import { ActivityComponent } from './activity/activity/activity.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { NewsComponent } from './news/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    TabbarComponent,
    IndexComponent,
    HomeComponent,
    PromoComponent,
    ActivityComponent,
    ProfileComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
