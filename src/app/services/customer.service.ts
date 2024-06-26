import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomeResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44373/api/customers/getall"
  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<CustomeResponseModel>{
    return this.httpClient.get<CustomeResponseModel>(this.apiUrl)
  }
}
