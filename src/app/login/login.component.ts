import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe({
      // gotta work in this any, not the best practice
      next: (payload: any) => {
        localStorage.setItem('access_token', payload.user.jwt_token);
        this.authService.navigateToBalance();
      },
      error: (error: any) => {
        console.error('Login failed', error);
      }
    });
  }
}
