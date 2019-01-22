import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import {
    MatPaginatorModule, 
    MatTableDataSource,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
    
  } from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatSelectModule,
        MatOptionModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule,
        MatCardModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatInputModule,
        MatRadioModule,
        MatSliderModule,
        MatGridListModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule
        
      ],
      exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatSelectModule,
        MatOptionModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule,
        MatCardModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatInputModule,
        MatRadioModule,
        MatSliderModule,
        MatGridListModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule
        
      ]
})

export class MaterialModule {}