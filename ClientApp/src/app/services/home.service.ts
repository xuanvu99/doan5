import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

const baseUrl = environment.apiUrl + "home/";

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private _http: HttpClient) { }

  getCategory() {
    return this._http.get(baseUrl);
  }

  getList(id) {
    return this._http.get(baseUrl + "list-product/" + id);
  }
}
