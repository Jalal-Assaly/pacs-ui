import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributesManagementRoutingModule } from './attributes-management-routing.module';

import { AccessPointsComponent } from './components/access-points/access-points.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { VisitorsComponent } from './components/visitors/visitors.component';

import { AccessPointsService } from './services/access-points.service';
import { EmployeesService } from './services/employees.service';
import { VisitorsService } from './services/visitors.service';


import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HttpClientModule } from '@angular/common/http';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    AccessPointsComponent,
    EmployeesComponent,
    VisitorsComponent
  ],
  imports: [
    CommonModule,
    AttributesManagementRoutingModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    HttpClientModule
  ],
  providers: [AccessPointsService, EmployeesService, VisitorsService]
})
export class AttributesManagementModule { }
