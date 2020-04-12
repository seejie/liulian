import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatIconModule,
  MatDividerModule,
  MatSnackBarModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
