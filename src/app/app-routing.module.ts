import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromoComponent } from './promo/promo/promo.component';
import { HomeComponent } from './home/home/home.component';
import { ActivityComponent } from './activity/activity/activity.component';
import { NewsComponent } from './news/news/news.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  {path: 'promo',     component: PromoComponent},
  {path: 'activity',  component: ActivityComponent},
  {path: 'home',      component: HomeComponent},
  {path: 'news',      component: NewsComponent},
  {path: 'profile',   component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PromoComponent, ActivityComponent, HomeComponent, NewsComponent, ProfileComponent];
