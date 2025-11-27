import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Item } from '../item';


@Injectable({
  providedIn: 'root',
})
export class Shopping {
    private apiUrl = '/api/data';
    private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
    //may need to change path 
    constructor(private http: HttpClient){}

     getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // B. POST Request (Sending new data)
  createItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
  // C. Error Handling Helper (Best Practice)
  private handleError(error: any) {
    console.error('An API error occurred:', error);
    // Return an observable with a user-facing error message
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
export class ApiService {
  // Assume an API endpoint that returns a single item with ID 1
  private apiUrl = '/api/item/1'; 

  constructor(private http: HttpClient) { }

  getItemDetails(): Observable<Item> {
    // The <Item> generic specifies the expected response type
    return this.http.get<Item>(this.apiUrl);
  }
}
