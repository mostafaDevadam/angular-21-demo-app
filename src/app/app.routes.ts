import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { langGuard } from './lang-guard';
import { Rx } from './pages/rx/rx';

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
            { path: 'login', component: Login },
            { path: 'rx', component: Rx }
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
