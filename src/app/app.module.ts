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


@NgModule({
  declarations: [
    AppComponent,
    TabbarComponent,
    routingComponents,
    NotFoundComponent,
    PreproductnameComponent,
    ProductselectamountComponent,
    ProductinamountComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
