import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslatePipe, /*TranslateDirective*/],   // <- add it here
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

 


   constructor(private route: ActivatedRoute, private router: Router, private translate: TranslateService) {
    this.sub = this.route.paramMap.subscribe(pm => {
      const lang = pm.get('lang') || 'en';
      this.currentLang = lang;
      this.translate.use(lang);
    });
  }



  currentLang = 'en';
  private sub: Subscription;

 

  isOpen = false;
  toggle() { this.isOpen = !this.isOpen; }

  //this.currentLang = this.route.snapshot.paramMap.get('lang') || 'en';


  langs = ['en', 'fr', 'es', 'ar'];
  selected = 'en';

  /*constructor(private translate: TranslateService) {
    translate.addLangs(this.langs);
    translate.setDefaultLang('en');
    translate.use('en');
  }*/

  changeLang(e: any) {
    const lang = e.target.value;
    this.selected = lang
    //this.translate.use(lang);
    //console.log(e.target.value)

    this.translate.use(lang);
  // keep current path after root; navigate to same child route under new lang
  /*const segments = this.router.url.split('/').slice(2); // remove leading '' and old lang
  this.router.navigate(['/', lang, ...segments]);
  localStorage.setItem('lang', lang);*/

  const tree = this.router.parseUrl(this.router.url);
  const childSegments = tree.root.children['primary']?.segments.map(s => s.path) ?? [];
  // if first segment is a route param value (like 'en'), remove it
  if (childSegments[0] && ['en','fr','es'].includes(childSegments[0])) childSegments.shift();
  this.router.navigate(['/', lang, ...childSegments]);

  
  }

  

  ngOnDestroy() { this.sub.unsubscribe(); }

}
