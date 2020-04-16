import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuproductService } from 'src/app/service/menuproduct.service';

@Component({
  selector: 'app-preproductname',
  templateUrl: './preproductname.component.html',
  styleUrls: ['./preproductname.component.css']
})
export class PreproductnameComponent implements OnInit {

  public productMenu = '';
  public productName = '';
  public productList : Array<any>;
  public isHidden = false;
  public btnHidden = true;
  public isActive = 'false';

  constructor(private route: ActivatedRoute, private router: Router, private _productService: ProductService,
     private snackBar: MatSnackBar, private _menuProductService: MenuproductService) {
       this.productList = new Array<any>();
      }

  ngOnInit(): void {
    // let menu = this.route.snapshot.paramMap.get('menu');
    this.productMenu = this._productService.getMenu();

    if (this._productService.getMenu() != '') {
      this._menuProductService.getMenuProducts(this._productService.getMenu())
              .subscribe(data => {
                this.productList = data;
                this.isHidden = true;
              });
    } else {
      this.snackBar.open('unable to get the data, please check your internet', 'Dismiss', {duration: 3000});
      this.router.navigate(['/home']);
    }      
  } 

  btnContinue(){
      if (this.productName == '') {
        this.snackBar.open('select product', 'Dismiss', {duration: 1000});
      } else {
        this.router.navigate(['/home/'+this.productMenu, this.productName]);
      }
  }

  selectProduct(_productId, _productName){
    this._productService.setProductName(_productId, _productName);
    this.productName = _productName;
    this.isActive = _productName;
    this.btnHidden = false;
  }

  goBack(){
    this.router.navigate(['/home']);
  }
}
