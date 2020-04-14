import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-confirmpayment',
  templateUrl: './confirmpayment.component.html',
  styleUrls: ['./confirmpayment.component.css']
})
export class ConfirmpaymentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

}
