import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrumsetsService {

  private apiUrl = 'http://localhost:3000/drumsets';

  constructor(private http: HttpClient) {}

  getDrumsets() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDrumsetById(id: number) {
    return this.http.get<any[]>(`${this.apiUrl}?drumsetId=${id}`);
  }
}
