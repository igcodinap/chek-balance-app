import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { WalletService } from '../services/wallet.service';
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  currency!: string;
  balance!: number;

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.fetchBalance();
  }

  updateBalance(): void {
    this.fetchBalance();
  }

  private async fetchBalance(): Promise<void> {
    try {
      const data = await firstValueFrom(this.walletService.getBalance());
      this.currency = data.currency;
      this.balance = data.balance;
    } catch (error) {
      console.error('Failed to fetch balance', error);
    }
  }
}
