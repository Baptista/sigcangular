import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainComponent } from './main/main.component'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatCardModule} from '@angular/material/card'; 
import { UserinfoComponent } from './userinfo/userinfo.component';
import { HeaderConsultComponent } from './headerconsult/headerconsult.component';
import { SearchconsultComponent } from './searchconsult/searchconsult.component';
import {MatInputModule} from '@angular/material/input';
import { TableComponent } from './materials/table/table.component'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { MatTableModule } from '@angular/material/table';
import { SwitchMaterialComponent } from './switchmaterial/switchmaterial.component'  
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './forms/searchform/searchform.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule,MAT_DATE_LOCALE } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { TextboxComponent } from './materials/textbox/textbox.component';
import { CheckboxComponent } from './materials/checkbox/checkbox.component';
import { DatepickerComponent } from './materials/datepicker/datepicker.component';
import { SelectComponent } from './materials/select/select.component';
import { DialogComponent } from './materials/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PanelformComponent } from './forms/panelform/panelform.component';
import { CreateformComponent } from './forms/createform/createform.component';
import { MatSortModule } from '@angular/material/sort';
import { TableformComponent } from './forms/tableform/tableform.component';
import { TreeComponent } from './materials/tree/tree.component';
import {MatTreeModule} from '@angular/material/tree'; 

@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    UserinfoComponent,
    HeaderConsultComponent,
    SearchconsultComponent,
    TableComponent,
    SwitchMaterialComponent,
    SearchFormComponent,
    TextboxComponent,
    CheckboxComponent,
    DatepickerComponent,
    SelectComponent,
    DialogComponent,
    PanelformComponent,
    CreateformComponent,
    TableformComponent,
    TreeComponent,
  ],
  imports: [
    CommonModule,    
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSortModule,
    MatTreeModule
  ],
  exports:[
    NavbarComponent,
    MainComponent,
    UserinfoComponent,
    HeaderConsultComponent,
    SearchFormComponent,
    SwitchMaterialComponent,
    DialogComponent
  ],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'pt-PT' }
  ]
})
export class LayoutModule { }
