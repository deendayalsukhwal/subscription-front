import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Plan } from '../_model/plan.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public createTransaction(amount) {
    return this.httpClient.get("http://localhost:9090/createTransaction/"+amount);
  }


  public addProduct(product: FormData) {
    return this.httpClient.post<Plan>("http://localhost:9090/addNewProduct", product);
  }

  public getProductDetailsById(productId) {
    return this.httpClient.get<Plan>("http://localhost:9090/getProductDetailsById/"+productId);
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete("http://localhost:9090/deleteProductDetails/"+productId);
  }

}
