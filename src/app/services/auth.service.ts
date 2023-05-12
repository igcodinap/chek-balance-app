import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<string> {
    const request = this.http.post<string>(`${environment.apiBaseUrl}/auth/login`, { email, password });
    return request;
  }

  navigateToBalance(): void {
    this.router.navigate(['/balance']);
  }
}