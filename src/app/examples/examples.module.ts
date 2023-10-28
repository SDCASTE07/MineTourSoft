import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { DashComponent } from './dash/dash.component';
import { NewsupervisorComponent } from './newsupervisor/newsupervisor.component';
import { PlanesComponent } from './planes/planes.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
    declarations: [
        SigninComponent,
        DashComponent,
        NewsupervisorComponent,
        PlanesComponent,
    ]
})
export class ExamplesModule { }
