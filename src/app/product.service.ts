import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  menu: any;
  productName: any;
  productAmount: any;
  accountNumber: any;

  constructor() {}

  setMenu(menu){
    this.menu = menu;
    localStorage.setItem('menu', menu);
  }

  setProductName(productName){
    this.productName = productName;
    localStorage.setItem('productName', productName)
  }

  setProductAmount(productAmount){
    this.productAmount = productAmount;
    localStorage.setItem('productAmount', productAmount);
  }

  setAccountNumber(accountNumber){
    this.accountNumber = accountNumber;
    localStorage.setItem('accountNumber', accountNumber);
  }
   
  getMenu(){
    return this.menu = localStorage.getItem('menu');
  }

  getProductName(){
    return this.productName = localStorage.getItem('productName');
  }

  getProductAmount(){
    return this.productAmount = localStorage.getItem('productAmount');
  }

  getAccountNumber(){
    return this.accountNumber = localStorage.getItem('accountNumber');
  }

}
