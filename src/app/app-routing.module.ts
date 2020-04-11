import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromoComponent } from './promo/promo/promo.component';
import { ActivityComponent } from './activity/activity/activity.component';
import { NewsComponent } from './news/news/news.component';

const routes: Routes = [
  {path: 'promo', component: PromoComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'home', component: ActivityComponent},
  {path: 'news', component: NewsComponent},
  {path: 'profile', component: PromoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
