import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NamesInterface} from "./shared/interfaces/names.interface";
import {catchError, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  private apiUrl = 'http://10.0.2.124';

  constructor(private http: HttpClient) { }

  getNames() {
    return this.http.get<NamesInterface>(`${this.apiUrl}/names`).pipe(
      tap(response => {
        console.log('Response:', response);
      }),
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  postName(name: string) {
    return this.http.post(`${this.apiUrl}/name`, { name }).pipe(
      tap(response => {
        console.log('Response:', response);
      }),
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
}
