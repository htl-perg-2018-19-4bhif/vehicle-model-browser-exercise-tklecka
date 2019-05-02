import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IModel } from '../Interfaces/imodel';

@Injectable({
  providedIn: 'root'
})
export class GetHttpService {

  url = 'https://vehicle-data.azurewebsites.net/api/';

  constructor(private http: HttpClient) { }

  getMakeYearOffset(make:string, year: number, offset:number): Observable<IModel[]> {
    return this.http.get<IModel[]>(`${this.url}models?make=${make}&year=${year}&offset=${offset}`);
  }

  getMakes(): Observable<string[]>{
    return this.http.get<string[]>(`${this.url}makes`);
  }

  getYears(): Observable<number[]>{
    return this.http.get<number[]>(`${this.url}years`);
  }

}
