import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-preproductname',
  templateUrl: './preproductname.component.html',
  styleUrls: ['./preproductname.component.css']
})
export class PreproductnameComponent implements OnInit {

  public isActive = false;
  public menu;
  public productName = '';

  constructor(private route: ActivatedRoute, private router: Router, private _productService: ProductService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // let menu = this.route.snapshot.paramMap.get('menu');
    
    this.menu = this._productService.getMenu();
    console.log(this._productService.getMenu());
  } 

  btnContinue(){
      if (this.productName == '') {
        this.snackBar.open('select product', 'Dismiss', {duration: 1000});
      } else {
        this.router.navigate(['/home/'+this.menu, this.productName]);
      }
  }

  selectProduct(productName){
    this._productService.setProductName(productName);
    this.productName = productName;
    console.log(productName);

    // if (productName == 'celcom') {
    //   this.isActive = true;
    // } else {
    //   this.isActive = false;
    // }
  }

}
