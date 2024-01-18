import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NamesInterface} from "./shared/interfaces/names.interface";
import {catchError, tap, throwError} from "rxjs";
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  private backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  getNames() {
    return this.http.get<NamesInterface>(`${this.backendUrl}/names`).pipe(
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
    console.log(this.backendUrl);
    return this.http.post(`${this.backendUrl}/name`, { name }).pipe(
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
