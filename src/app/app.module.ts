import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TabbarComponent } from './tabbar/tabbar.component'; 
import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { PreproductnameComponent } from './home/payment/preproductname/preproductname.component';
import { ProductselectamountComponent } from './home/payment/productselectamount/productselectamount.component';
import { ProductinamountComponent } from './home/payment/productinamount/productinamount.component';
import { PaidsummeryComponent } from './home/payment/paidsummery/paidsummery.component';
import { ProductService } from './product.service';
import { ConfirmpaymentComponent } from './home/payment/confirmpayment/confirmpayment.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TabbarComponent,
    routingComponents,
    NotFoundComponent,
    PreproductnameComponent,
    ProductselectamountComponent,
    ProductinamountComponent,
    PaidsummeryComponent,
    ConfirmpaymentComponent
  ],
  entryComponents: [
    ConfirmpaymentComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
