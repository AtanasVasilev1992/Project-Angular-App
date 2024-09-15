import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Theme } from './types/Theme';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    const { apiUrl } = environment;

    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getPosts(limit?: number) {}
}
