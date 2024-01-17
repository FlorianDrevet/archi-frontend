import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NamesInterface} from "./shared/interfaces/names.interface";

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getNames() {
    return this.http.get<NamesInterface>(`${this.apiUrl}/names`);
  }

  postName(name: string) {
    return this.http.post(`${this.apiUrl}/name`, { name });
  }
}
