import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-paidsummery',
  templateUrl: './paidsummery.component.html',
  styleUrls: ['./paidsummery.component.css']
})
export class PaidsummeryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnHome(){
    this.router.navigate(['/home']);
  }

}
