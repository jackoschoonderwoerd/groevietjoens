import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BassistComponent } from './pages/bassist/bassist.component';
import { MuziekComponent } from './pages/muziek/muziek.component';
import { VideosComponent } from './pages/videos/videos.component';
import { KlantenComponent } from './pages/klanten/klanten.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'bassist', component: BassistComponent
    },
    {
        path: 'muziek', component: MuziekComponent
    },
    {
        path: 'videos', component: VideosComponent
    },
    {
        path: 'klanten', component: KlantenComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: '**', redirectTo: 'home'
    }
];
