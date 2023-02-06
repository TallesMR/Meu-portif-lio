import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: ''  , component:HomeComponent},
  { path: 'home'  , component:HomeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
