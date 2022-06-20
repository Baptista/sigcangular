import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './header/navbar/navbar.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header/header.component'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatCardModule} from '@angular/material/card'; 
import { UserinfoComponent } from './header/userinfo/userinfo.component';
import { HeaderConsultComponent } from './body/consult/header/headerconsult.component';
import { SearchconsultComponent } from './body/consult/searchconsult/searchconsult.component';
import {MatInputModule} from '@angular/material/input';
import { ResultsconsultComponent } from './body/consult/resultsconsult/resultsconsult.component'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { MatTableModule } from '@angular/material/table';
import { SelectformComponent } from './body/selectform/selectform.component'  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupformComponent } from './body/groupform/groupform.component';
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

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    UserinfoComponent,
    HeaderConsultComponent,
    SearchconsultComponent,
    ResultsconsultComponent,
    SelectformComponent,
    GroupformComponent,
    TextboxComponent,
    CheckboxComponent,
    DatepickerComponent,
    SelectComponent,
    DialogComponent,
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
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports:[
    NavbarComponent,
    HeaderComponent,
    UserinfoComponent,
    HeaderConsultComponent,
    GroupformComponent,
    SelectformComponent
  ],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'pt-PT' }
  ]
})
export class LayoutModule { }
