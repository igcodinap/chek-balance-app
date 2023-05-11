import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  currency!: string;
  balance!: number;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchBalance();
  }

  updateBalance(): void {
    this.fetchBalance();
  }

  private fetchBalance(): void {
    // suscribe is deprecated, need to use pipe
    this.authService.getBalance().subscribe(
      (data) => {
        this.currency = data.currency;
        this.balance = data.balance;
      },
      (error) => {
        console.error('Failed to fetch balance', error);
      }
    );
  }

}
