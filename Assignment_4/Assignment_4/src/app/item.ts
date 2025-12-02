import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface Item {
  name: string;
  image: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
    private apiUrl = '/api/items';
    private orderUrl = '/api/order';
    private lastOrderUrl = '/api/last-order';
    private submitOrderUrl = '/api/submit-order';

    constructor(private http: HttpClient){

    }
    getItems(): Observable<Item[]> {
      return this.http.get<Item[]>(this.apiUrl);
    }

    createItem(name: string): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, { name });

    
  }

  sendOrder(item: Item): Observable<any>{
    return this.http.post<any>(this.orderUrl, item);
  }

  getLastOrder(): Observable<Item>{
    return this.http.get<Item>(this.lastOrderUrl);
  }

  submitFinalOrder(item: Item): Observable<any> {
    return this.http.post<any>(this.submitOrderUrl, item);
  }

}
