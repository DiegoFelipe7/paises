import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interface/pais.interface';
@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private url = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}
  buscarPais(pais: String): Observable<Country[]> {
    if (pais.trim() == '') {
      alert('Ingresa un pais');
    }
    console.log(pais);
    const url = `${this.url}/name/${pais}`;
    return this.http.get<Country[]>(url);
  }
}
