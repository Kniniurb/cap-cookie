import { Component } from '@angular/core';
import { CapacitorCookies } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  key = '';
  value = '';

  async addCookie(): Promise<void> {
    const key = this.key.trim();
    const value = this.value.trim();
    if (key && value) {
      await CapacitorCookies.setCookie({
        url: 'http://localhost',
        key,
        value,
      });
    }
  }

  async clear(): Promise<void> {
    await CapacitorCookies.clearAllCookies();
  }
}
