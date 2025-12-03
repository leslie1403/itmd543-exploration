import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { VenuesComponent } from './pages/venues/venues';
import { ServicesComponent } from './pages/services/services';

export const routes: Routes = [
  { path: '', component: HomeComponent },        
  { path: 'venues', component: VenuesComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', redirectTo: '' },                
];
