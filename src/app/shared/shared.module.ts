import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BadgeComponent } from './components/badge/badge.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InputComponent } from './components/input/input.component';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RadioComponent } from './components/radio/radio.component';
import { SelectComponent } from './components/select/select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaterialModule } from './modules/material.module';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    LazyLoadImageModule
  ],
  declarations: [
    SpinnerComponent,
    LoadingPlaceholderComponent,
    CapitalizeFirstPipe,
    PaginationComponent,
    CatalogComponent,
    InputComponent,
    RadioComponent,
    CheckboxComponent,
    BadgeComponent,
    SelectComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SpinnerComponent,
    LoadingPlaceholderComponent,
    CapitalizeFirstPipe,
    LazyLoadImageModule
  ]
})
export class SharedModule {}
