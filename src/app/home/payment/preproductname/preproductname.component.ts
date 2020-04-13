import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';

@Component({
  selector: 'app-preproductname',
  templateUrl: './preproductname.component.html',
  styleUrls: ['./preproductname.component.css']
})
export class PreproductnameComponent implements OnInit {

  public isActive = true;
  public menu;
  public productName = 'umobile';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let menu = this.route.snapshot.paramMap.get('menu');
    this.menu = menu;
  } 

  btnContinue(){
       this.router.navigate(['/home/'+this.menu, this.productName]);
 
  }

  selectProduct(productName){
    this.productName = productName;
    console.log(productName);
  }

}
