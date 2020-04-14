import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmpaymentComponent } from '../confirmpayment/confirmpayment.component';

@Component({
  selector: 'app-productselectamount',
  templateUrl: './productselectamount.component.html',
  styleUrls: ['./productselectamount.component.css']
})
export class ProductselectamountComponent implements OnInit {

  
  public isActive = true;
  public productMenu = '';
  public productName = '';
  public productAmount = '';
  public productAccount = '';

  constructor(private route: ActivatedRoute, private router: Router,private _productService: ProductService, private snackBar: MatSnackBar, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    // let menu = this.route.snapshot.paramMap.get('menu');
    // let productName = this.route.snapshot.paramMap.get('product');
    
    this.productMenu = this._productService.getMenu();
    this.productName = this._productService.getProductName();
  }
  
  
  btnConfirmPayment(){
    if (this.productAmount != '' && this.productAccount != '') {
    // if (true) {

      let dialogRef = this.dialog.open(ConfirmpaymentComponent, {data: {name: this.productName, amount: this.productAmount, account: this.productAccount}});

      dialogRef.afterClosed().subscribe(result => {
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
    this.productAccount = event.target.value;
    this._productService.setAccountNumber(event.target.value);
    // console.log(this.productAccount);
  }

}
