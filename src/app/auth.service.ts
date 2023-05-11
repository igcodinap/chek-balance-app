import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// name also wip
export class AuthService {
  //wip, later to env var
  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<string> {
    console.log('login executed')
    const request = this.http.post<string>(`${this.apiBaseUrl}/auth/login`, { email, password });
    console.log(request, 'request')
    return request;
  }

  navigateToBalance(): void {
    this.router.navigate(['/balance']);
  }

  getBalance(): Observable<{ currency: string; balance: number }> {
    return this.http.get<{ currency: string; balance: number }>(`${this.apiBaseUrl}/wallet/balance`);
  }
}