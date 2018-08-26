import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LayoutRoutes} from './layout.routes';

import {
  __IMPORTS,
  __DECLARATIONS,
  __PROVIDERS,
  __ENTRY_COMPONENTS
} from './components.barrel';

@NgModule({
  imports: [CommonModule, __IMPORTS, LayoutRoutes],
  declarations: [__DECLARATIONS],
  exports: [__DECLARATIONS],
  providers: [__PROVIDERS],
  entryComponents: [__ENTRY_COMPONENTS]
})
export class LayoutModule { }
