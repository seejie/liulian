import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { MenuproductService } from 'src/app/service/menuproduct.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router, private _productService: ProductService, 
    private _menuProductService: MenuproductService){}

  ngOnInit(): void {
    this._menuProductService.getCurrencyRate().subscribe(data => {this._productService.setCurrencyRate(data.data[0].rate_cny)});
  }

  futureMessage(){
    this.snackBar.open('will be available soon', 'Dismiss', {duration: 1000});
    console.log('will be available soon');
  }

  onSelect(menu){
    this._productService.setMenu(menu);
    this.router.navigate(['/home', menu]);
  }


}
