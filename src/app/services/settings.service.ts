import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public links:NodeListOf<Element>;

  public linkTheme = document.querySelector('#theme');

  constructor() { }


  cambiarColor(color: string) {
    const url = `./assets/css/colors/${color}.css`;

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('tema', url);

  }


  checkCurrent() {
    this.links =document.querySelectorAll('.selector');

    this.links.forEach((item) => {
      item.classList.remove('working');
      const btnTheme = item.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        item.classList.add('working');
      }
    });
  }

}
