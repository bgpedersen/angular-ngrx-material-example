import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [SharedHeaderComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedHeaderComponent,
  ],
})
export class SharedModule {}
