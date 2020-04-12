import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-preproductname',
  templateUrl: './preproductname.component.html',
  styleUrls: ['./preproductname.component.css']
})
export class PreproductnameComponent implements OnInit {

  public id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = id;
  } 

}
