import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";
import translationsEN from "../assets/i18n/en.json";
import translationsES from "../assets/i18n/es.json";
import translationsFR from "../assets/i18n/fr.json";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-app');
  private translate = inject(TranslateService);

  constructor() {
    //this.translate.addLangs(['fr', 'en', 'es']);
    //this.translate.setFallbackLang('en');

    /*this.translate.setTranslation('en', translationsEN);
    this.translate.setTranslation('es', translationsES);
    this.translate.setTranslation('fr', translationsFR);
    this.translate.setFallbackLang('en');
    this.translate.use('en');*/
  }


}
