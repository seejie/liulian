import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  menu: any;
  productName: any;
  productAmount: any;
  accountNumber: any;
  productId: any;
  productSKU: any;

  currencyRate: any;

  constructor() {}

  setMenu(menu){
    this.menu = menu;
    localStorage.setItem('menu', menu);
  }

  setProductName(productId, productName){
    this.productName = productName;
    localStorage.setItem('productName', productName);

    this.productId = productId;
    localStorage.setItem('productId', productId);
  }

  setProductSKU(productSKU){
    this.productSKU = productSKU;
    localStorage.setItem('productSKU', productSKU);
  }

  setProductAmount(productAmount){
    this.productAmount = productAmount;
    localStorage.setItem('productAmount', productAmount);
  }

  setAccountNumber(accountNumber){
    this.accountNumber = accountNumber;
    localStorage.setItem('accountNumber', accountNumber);
  }

  setCurrencyRate(currencyRate){
    this.currencyRate = currencyRate;
    localStorage.setItem('currencyRate', currencyRate)
  }
   
  getMenu(){
    return this.menu = localStorage.getItem('menu');
  }

  getProductName(){
    return this.productName = localStorage.getItem('productName');
  }

  getProductId(){
    return this.productId = localStorage.getItem('productId');
  }

  getProductAmount(){
    return this.productAmount = localStorage.getItem('productAmount');
  }

  getAccountNumber(){
    return this.accountNumber = localStorage.getItem('accountNumber');
  }

  getCurrencyRate(){
    return this.currencyRate = localStorage.getItem('currencyRate');
  }

  getProductSKU(){
    return this.productSKU = localStorage.getItem('productSKU');
  }

}
