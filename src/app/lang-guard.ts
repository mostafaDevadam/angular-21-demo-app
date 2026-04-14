import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Router } from 'express';


export const langGuard: CanActivateFn = (route, state) => {
const translate = inject(TranslateService);
const supported = ['en', 'fr', 'es', 'ar'];
const lang = route.paramMap.get('lang') ?? 'en';
translate.use(supported.includes(lang) ? lang : 'en');
return true;
}

/*
@Injectable({ providedIn: 'root' })
export class langGuard implements CanActivate {
  constructor(private translate: TranslateService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const lang = route.params['lang'];
    const supported = ['en','fr','es'];
    const use = supported.includes(lang) ? lang : 'en';
    this.translate.use(use);
    return true;
  }
}
*/