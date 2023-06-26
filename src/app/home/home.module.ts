import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouteModules } from './home.routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRouteModules
  ]
})
export class HomeModule { }
