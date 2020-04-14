import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';

@Component({
  selector: 'app-productselectamount',
  templateUrl: './productselectamount.component.html',
  styleUrls: ['./productselectamount.component.css']
})
export class ProductselectamountComponent implements OnInit {

  
  public isActive = true;
  public menu;
  public productName;
  public productAmount;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let menu = this.route.snapshot.paramMap.get('menu');
    this.menu = menu;
    
    let productName = this.route.snapshot.paramMap.get('product');
    this.productName = productName;
  }
  
  
  btnConfirmPayment(){
    this.router.navigate(['/home/'+this.menu, this.productName]);
  }
  
  btnMakePayment(){
    this.router.navigate(['/summery']);
  }

  selectAmount(productAmount){
    this.productAmount = productAmount;
    console.log(productAmount);
  }

}
