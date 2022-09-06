import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/product';

@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(private httpClient: HttpClient) { }
    
    public GetAll() : Observable<IProduct[]>{
        //get all prods
        //return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products');

        //https://fakestoreapi.com/products?limit=5
        return this.httpClient.get<IProduct[]>("https://fakestoreapi.com/products",
        {
            params: new HttpParams().append('limit', 3)
        });
    }
}