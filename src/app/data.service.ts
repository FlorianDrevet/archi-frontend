import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(this.backendUrl).pipe(
      tap(response => {
        console.log('Response:', response);
      }),
      catchError(error => {
        console.error('Error:', error);
        return throwError(error); // Renvoie l'erreur pour un traitement ultérieur si nécessaire
      })
    );
  }
}
