import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmpaymentComponent } from '../confirmpayment/confirmpayment.component';
import { MenuproductService } from 'src/app/service/menuproduct.service';

@Component({
  selector: 'app-productinamount',
  templateUrl: './productinamount.component.html',
  styleUrls: ['./productinamount.component.css']
})
export class ProductinamountComponent implements OnInit {

   
  public isActive = true;
  public productMenu = '';
  public productName = '';
  public productAmount = '';
  public productAccount = '';
  public productAmountList : Array<any>;

  constructor(private route: ActivatedRoute, private router: Router,private _productService: ProductService, private snackBar: MatSnackBar, 
    private dialog: MatDialog, private _menuProductService: MenuproductService) {
      
     }

  ngOnInit(): void {
    // let menu = this.route.snapshot.paramMap.get('menu');
    // let productName = this.route.snapshot.paramMap.get('product');

    if (this._productService.getMenu() != '' &&  this._productService.getProductId() != '') {
      this._menuProductService.getProductAmountList(this._productService.getMenu(), this._productService.getProductId())
              .subscribe(data => {
                this.productAmountList = data;
                this._productService.setProductSKU(data.data[0].product_code);

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
    // console.log(this._productService.getProductSKU());
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
      if (this.productAccount == '') {
        message += ' enter account,';
      } 
      if (this.productAmount == '') {
        message += 'enter amount';
      } 
      
      this.snackBar.open(message, 'Dismiss', {duration: 3000});
    }
    

    // this.router.navigate(['/home/'+this.menu, this.productName]);
  }

  
  account(event: any) { // without type info
    this.productAccount = event.target.value;
    this._productService.setAccountNumber(event.target.value);
    // console.log(this.productAccount);
  }

  
  amount(event: any) { // without type info
    this.productAmount = event.target.value;
    // this._productService.setAccountNumber(event.target.value);

    let amount: any = parseInt(this.productAmount)*1.63;
    let amountcny = parseFloat(amount).toFixed(2);
    this.productAmount = this.productAmount+'RM/'+ amountcny  +'CNY';
    this._productService.setProductAmount(this.productAmount);


    // console.log(this.productAccount);
  }

  goBack(){
    this.router.navigate(['/home/'+this.productMenu]);
  }
  

}
