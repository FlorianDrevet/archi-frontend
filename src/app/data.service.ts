import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private backendUrl = 'http://10.0.2.241:8000/';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(this.backendUrl);
  }
}
