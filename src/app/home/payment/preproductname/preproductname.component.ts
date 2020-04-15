import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuproductService } from 'src/app/service/menuproduct.service';

@Component({
  selector: 'app-preproductname',
  templateUrl: './preproductname.component.html',
  styleUrls: ['./preproductname.component.css']
})
export class PreproductnameComponent implements OnInit {

  public isActive = false;
  public menu;
  public test_var = '';
  public productName = '';
  productList : Array<any>;

  constructor(private route: ActivatedRoute, private router: Router, private _productService: ProductService,
     private snackBar: MatSnackBar, private _menuProductService: MenuproductService) {
       this.productList = new Array<any>();
      }

  ngOnInit(): void {
    // let menu = this.route.snapshot.paramMap.get('menu');

    if (this._productService.getMenu() != '') {

    this._menuProductService.getMenuProducts(this._productService.getMenu())
            .subscribe(data => {
              this.productList = data;
              // console.log(data);
            });
    } else {
      this.snackBar.open('unable to get the data, please check your internet', 'Dismiss', {duration: 3000});
    }

    console.log(this.productList);

    
    this.menu = this._productService.getMenu();
    // console.log(this._productService.getMenu());
  } 

  btnContinue(){
      if (this.productName == '') {
        this.snackBar.open('select product', 'Dismiss', {duration: 1000});
      } else {
        this.router.navigate(['/home/'+this.menu, this.productName]);
      }
  }

  selectProduct(productId,productName){
    this._productService.setProductName(productId, productName);
    this.productName = productName;
    console.log(productName);

    // if (productName == 'celcom') {
    //   this.isActive = true;
    // } else {
    //   this.isActive = false;
    // }
  }

}
