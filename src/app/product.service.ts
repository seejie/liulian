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
  }

  setProductName(productName){
    this.productName = productName;
  }

  setProductAmount(productAmount){
    this.productAmount = productAmount;
  }

  setAccountNumber(accountNumber){
    this.accountNumber = accountNumber;
  }
   
  getMenu(){
    return this.menu;
  }

  getProductName(){
    return this.productName;
  }

  getProductAmount(){
    return this.productName;
  }

  getAccountNumber(){
    return this.accountNumber;
  }

}
