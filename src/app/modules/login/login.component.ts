import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/']);
    });
  }
}
