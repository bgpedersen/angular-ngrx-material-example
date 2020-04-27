import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss'],
})
export class SharedHeaderComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.setAuthenticated(false);
    this.router.navigateByUrl('login');
  }

  get isAuthenticated() {
    return this.authService.getAuthenticated();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get currentTheme$() {
    return this.themeService.currentTheme$;
  }

  ngOnInit(): void {}
}
