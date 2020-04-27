import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'authenticated';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

  getAuthenticated(): boolean {
    return this.storage.get(STORAGE_KEY) || false;
  }

  setAuthenticated(val: boolean) {
    this.storage.set(STORAGE_KEY, val);
  }
}
