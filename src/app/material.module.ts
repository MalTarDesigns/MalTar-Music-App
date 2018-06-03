import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as fromMaterial from '@angular/material';

@NgModule({
  exports: [
    FlexLayoutModule,
    fromMaterial.MatButtonModule,
    fromMaterial.MatCardModule,
    fromMaterial.MatMenuModule,
    fromMaterial.MatToolbarModule,
    fromMaterial.MatIconModule,
    fromMaterial.MatFormFieldModule,
    fromMaterial.MatInputModule,
    fromMaterial.MatTabsModule,
  ],
  imports: [
    FlexLayoutModule,
    fromMaterial.MatButtonModule,
    fromMaterial.MatCardModule,
    fromMaterial.MatMenuModule,
    fromMaterial.MatToolbarModule,
    fromMaterial.MatIconModule,
    fromMaterial.MatFormFieldModule,
    fromMaterial.MatInputModule,
    fromMaterial.MatTabsModule
  ]
})
export class MaterialModule { }
