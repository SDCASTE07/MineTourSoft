import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { SigninComponent } from './examples/signin/signin.component';
import { DashComponent } from './examples/dash/dash.component'
import {AuthGuard} from './AuthGuard'
import {NewsupervisorComponent} from './examples/newsupervisor/newsupervisor.component'
import {PlanesComponent} from './examples/planes/planes.component'
const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ComponentsComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'dash', component: DashComponent, canActivate: [AuthGuard] },
    { path: 'newsuper', component: NewsupervisorComponent, canActivate: [AuthGuard] },
    { path: 'planes', component: PlanesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
