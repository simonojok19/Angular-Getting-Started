import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IProduct} from './products';
import {Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'http://localhost:3000/data';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    console.log('here');
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap( data => console.log('data recieved')),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is : ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
