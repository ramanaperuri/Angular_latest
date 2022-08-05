import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatTabsModule,
  MatFormFieldModule,
  MatCheckboxModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],

  exports: [
    material
  ]
})
export class MatModule { }
