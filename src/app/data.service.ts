import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private backendUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(this.backendUrl).pipe(tap((response) => { console.log(response); }));
  }
}
