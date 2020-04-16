import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmpaymentComponent } from '../confirmpayment/confirmpayment.component';
import { MenuproductService } from 'src/app/service/menuproduct.service';

@Component({
  selector: 'app-productselectamount',
  templateUrl: './productselectamount.component.html',
  styleUrls: ['./productselectamount.component.css']
})
export class ProductselectamountComponent implements OnInit {

  
  public isHidden = false;
  public productMenu = '';
  public productName = '';
  public productAmount = '';
  public productAccount = '';
  public productAmountList : Array<any>;


  constructor(private route: ActivatedRoute, private router: Router,private _productService: ProductService, private snackBar: MatSnackBar, 
    private dialog: MatDialog, private _menuProductService: MenuproductService) {
      this.productAmountList = new Array<any>(); }

  ngOnInit(): void {
    // let menu = this.route.snapshot.paramMap.get('menu');
    // let productName = this.route.snapshot.paramMap.get('product');

    console.log(this._productService.getProductSKU());

    if (this._productService.getMenu() != '' &&  this._productService.getProductId() != '') {
      this._menuProductService.getProductAmountList(this._productService.getMenu(), this._productService.getProductName())
              .subscribe(data => {
                this.productAmountList = data;
                this.isHidden = true;

                // console.log(this._productService.getMenu());
                // console.log(this._productService.getProductId());
                // console.log(data);
              });
    } else {
      this.snackBar.open('unable to get the data, please check your internet', 'Dismiss', {duration: 3000});
      this.router.navigate(['/home']);
    }    
    
    this.productMenu = this._productService.getMenu();
    this.productName = this._productService.getProductName();
  }
  
  
  btnConfirmPayment(){
    if (this.productAmount != '' && this.productAccount != '') {
    // if (true) {

      let dialogRef = this.dialog.open(ConfirmpaymentComponent, {data: {name: this.productName, amount: this.productAmount, account: this.productAccount}});

      dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/summery']);

        console.log('Dialog result: '+ result);
      });

    } else {
      let message = '';
      if (this.productAmount == '') {
        message += 'select amount,';
      } 
      if (this.productAccount == '') {
        message += ' enter account';
      } 
      this.snackBar.open(message, 'Dismiss', {duration: 3000});
      
    }
    
    // this.router.navigate(['/home/'+this.menu, this.productName]);
  }
  
  btnMakePayment(){
    // this.router.navigate(['/summery']);
  }

  selectAmount(productAmount){
    let amount: any = parseInt(productAmount)*1.63;
    let amountcny = parseFloat(amount).toFixed(2);
    this.productAmount = productAmount+'RM/'+ amountcny  +'CNY';
    this._productService.setProductAmount(this.productAmount);
    console.log(productAmount);
  }

  onKey(event: any) { // without type info
    this.productAccount = '+60 '+event.target.value;
    this._productService.setAccountNumber(event.target.value);
    // console.log(this.productAccount);
  }

  goBack(){
    this.router.navigate(['/home/'+this.productMenu]);
  }

}
