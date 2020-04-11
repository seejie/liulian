import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';


const material = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatIconModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
