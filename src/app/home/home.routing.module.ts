import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

export const HomeRouteModules = RouterModule.forChild(routes);
