import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMenuProduct } from './menuproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuproductService {


  constructor(private http: HttpClient) { }

  getMenuProducts($_id): Observable<any>{
    let getMenuURL = 'https://restservice.pavertech.my/api/product_name/menu/';

    if ($_id == 'prepaid')    {$_id = 1}
    if ($_id == 'postpaid')   {$_id = 2}
    if ($_id == 'touchngo')   {$_id = 3}
    if ($_id == 'games')      {$_id = 4}
    if ($_id == 'water')      {$_id = 5}
    if ($_id == 'electricity')      {$_id = 6}
    if ($_id == 'internet')   {$_id = 7}
    if ($_id == 'television') {$_id = 8}
    // if ($_id == 'prepaid') {$_id = 8}
    // if ($_id == 'prepaid') {$_id = 9}
    // if ($_id == 'prepaid') {$_id = 10}
    // if ($_id == 'prepaid') {$_id = 11}
    // if ($_id == 'prepaid') {$_id = 12}

    // getMenuURL = getMenuURL+$_id;

    // return getMenuURL;
    return this.http.get<any>(getMenuURL+$_id);
  }
  // getMenuProducts(): Observable<IMenuProduct[]>{
  //   return this.http.get<IMenuProduct[]>('https://restservice.pavertech.my/api/product_name/menu/1');
  // }
}
