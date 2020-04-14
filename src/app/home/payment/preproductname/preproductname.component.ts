import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-preproductname',
  templateUrl: './preproductname.component.html',
  styleUrls: ['./preproductname.component.css']
})
export class PreproductnameComponent implements OnInit {

  public isActive = true;
  public menu;
  public productName = 'umobile';

  constructor(private route: ActivatedRoute, private router: Router, private _productService: ProductService) { }

  ngOnInit(): void {
    // let menu = this.route.snapshot.paramMap.get('menu');
    
    this.menu = this._productService.getMenu();
    console.log(this._productService.getMenu());
  } 

  btnContinue(){
       this.router.navigate(['/home/'+this.menu, this.productName]);
 
  }

  selectProduct(productName){
    this.productName = productName;
    console.log(productName);
  }

}
