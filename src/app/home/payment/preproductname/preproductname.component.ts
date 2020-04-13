import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-preproductname',
  templateUrl: './preproductname.component.html',
  styleUrls: ['./preproductname.component.css']
})
export class PreproductnameComponent implements OnInit {

  public isActive = true;
  public id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = id;
  } 

  btnContinue(){
    if((this.id == 'prepaid') || (this.id == 'games')){
      console.log('selectampunt');
    }else{
      console.log('input paiment');
    }
  }

  selectProduct(productName){
    console.log(productName);
  }

}
