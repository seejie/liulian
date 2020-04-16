import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-paidsummery',
  templateUrl: './paidsummery.component.html',
  styleUrls: ['./paidsummery.component.css']
})
export class PaidsummeryComponent implements OnInit {

  constructor(private router: Router, private _productService: ProductService) { }

  ngOnInit(): void {
    console.log('getMenu: '+this._productService.getMenu());
    console.log('getProductName: '+this._productService.getProductName());
    console.log('getProductId: '+this._productService.getProductId());
    console.log('getProductAmount: '+this._productService.getProductAmount());
    console.log('getAccountNumber: '+this._productService.getAccountNumber());
    console.log('getCurrencyRate: '+this._productService.getCurrencyRate());
    console.log('getProductSKU: '+this._productService.getProductSKU()); 
  }

  btnHome(){
    this.router.navigate(['/home']);
  }

}
