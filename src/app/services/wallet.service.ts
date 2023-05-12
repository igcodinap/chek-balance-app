import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  constructor(private http: HttpClient) {}

  getBalance(): Observable<{ currency: string; balance: number }> {
    return this.http.get<{ currency: string; balance: number }>(`${environment.apiBaseUrl}/wallet/balance`);
  }
}
