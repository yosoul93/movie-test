import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import{ MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    FlexLayoutModule,
    CommonModule,
    RouterModule,

    // material
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {}
