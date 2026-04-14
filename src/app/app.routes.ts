import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Register } from './register/register';
import { Login } from './login/login';
import { langGuard } from './lang-guard';

export const routes: Routes = [
    {
        path: ':lang',
        canActivate: [langGuard],
        //canActivateChild: [LangGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Home },
            { path: 'about', component: About },
            { path: 'contact', component: Contact },
            { path: 'register', component: Register },
            { path: 'login', component: Login }
        ]
    },
    { path: '', redirectTo: 'en', pathMatch: 'full' },
    { path: '**', redirectTo: 'en' }

    /*{ path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'register', component: Register },
    { path: 'login', component: Login },*/

];
