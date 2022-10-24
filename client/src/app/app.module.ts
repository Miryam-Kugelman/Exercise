import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import {MatTableModule} from '@angular/material/table';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DialogAddVaccinationsComponent } from './dialog-add-vaccinations/dialog-add-vaccinations.component';
import { DialogDataVaccinationsComponent } from './dialog-data-vaccinations/dialog-data-vaccinations.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    DialogAddComponent,
    DialogUpdateComponent,
    DialogDataComponent,
    DialogAddVaccinationsComponent,
    DialogDataVaccinationsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
