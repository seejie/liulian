import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router){}

  
  // openSnackBar(message) {
  // }

  ngOnInit(): void {
  }

  futureMessage(){
    this.snackBar.open('will be available soon', 'Dismiss', {duration: 1000});
    console.log('will be available soon');
  }

  onSelect(menu){
    this.router.navigate(['/home', menu]);
  }


}
