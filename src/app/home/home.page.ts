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

  constructor() {
    document.cookie = `test=${new Date().toISOString()}`;
  }

  async addCookie(): Promise<void> {
    const key = this.key.trim();
    const value = this.value.trim();
    if (key && value) {
      await CapacitorCookies.setCookie({
        url: 'http://localhost',
        key: key,
        value: `${value} ${new Date().toISOString()}`,
      });
      CapacitorCookies.getCookies().then((cookies) => {
        console.log('Cookies', cookies);
        alert('Cookies: ' + JSON.stringify(cookies));
      });  
    }
  }

  async clear(): Promise<void> {
    await CapacitorCookies.clearAllCookies();
  }
}
