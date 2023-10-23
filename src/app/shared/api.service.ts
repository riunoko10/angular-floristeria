import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://api-artefloral.onrender.com/'

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(this.urlApi + 'products');
  }

  addProduct(product: any): Observable<any>{
    return this.http.post(this.urlApi + 'product', product);
  
  }

  getDataClient(): Observable<any>{
    return this.http.get(this.urlApi + 'clients');
  }

  addClient(client: any): Observable<any>{
    return this.http.post(this.urlApi + 'client', client);
  
  }

}
