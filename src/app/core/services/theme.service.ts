import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Theme = 'theme-light' | 'theme-dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themes: Theme[] = ['theme-light', 'theme-dark'];
  private theme = new BehaviorSubject<Theme>('theme-dark');

  constructor() {
    this.theme.subscribe((theme) => {
      const body = document.querySelector('body');
      body.classList.remove(...this.themes);
      body.classList.add(theme);
    });
  }

  toggleTheme() {
    if (this.theme.value === 'theme-dark') {
      this.theme.next('theme-light');
    } else {
      this.theme.next('theme-dark');
    }
  }

  get currentTheme$() {
    return this.theme;
  }
}
