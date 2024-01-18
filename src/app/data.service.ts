import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private backendUrl = 'http://10.0.2.124';

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
