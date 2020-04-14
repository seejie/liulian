import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromoComponent } from './promo/promo/promo.component';
import { HomeComponent } from './home/home/home.component';
import { ActivityComponent } from './activity/activity/activity.component';
import { NewsComponent } from './news/news/news.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreproductnameComponent } from './home/payment/preproductname/preproductname.component';
import { ProductselectamountComponent } from './home/payment/productselectamount/productselectamount.component';
import { PaidsummeryComponent } from './home/payment/paidsummery/paidsummery.component';
import { ProductinamountComponent } from './home/payment/productinamount/productinamount.component';

const routes: Routes = [
  {path: '',          redirectTo: '/home', pathMatch: 'full'},
  {path: 'promo',     component: PromoComponent},
  {path: 'activity',  component: ActivityComponent},

  {path: 'home',      component: HomeComponent},
  {path: 'home/:menu',  component: PreproductnameComponent},

  {path: 'home/prepaid/:product',  component: ProductselectamountComponent},
  {path: 'home/games/:product',  component: ProductselectamountComponent},

  {path: 'home/postpaid/:product', component:ProductinamountComponent},
  {path: 'home/water/:product', component:ProductinamountComponent},
  {path: 'home/electricity/:product', component:ProductinamountComponent},
  {path: 'home/internet/:product', component:ProductinamountComponent},
  {path: 'home/television/:product', component:ProductinamountComponent},

  
  {path: 'summery',  component: PaidsummeryComponent},

  {path: 'news',      component: NewsComponent},
  {path: 'profile',   component: ProfileComponent},

  {path: '**',        component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PromoComponent, ActivityComponent, HomeComponent, NewsComponent, ProfileComponent, NotFoundComponent,
  PreproductnameComponent, ProductselectamountComponent];
