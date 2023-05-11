import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
// name also wip
export class AuthService {
  //wip, later to env var
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<string> {
    console.log('login executed')
    const request = this.http.post<string>(`${environment.apiBaseUrl}/auth/login`, { email, password });
    console.log(request, 'request')
    return request;
  }

  navigateToBalance(): void {
    this.router.navigate(['/balance']);
  }

  //should take this to other file
  getBalance(): Observable<{ currency: string; balance: number }> {
    console.log('getBalance executed')
    return this.http.get<{ currency: string; balance: number }>(`${environment.apiBaseUrl}/wallet/balance`);
  }
}