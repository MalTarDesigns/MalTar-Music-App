// Import components and services etc here

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";


import {
    MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule,
    MatListModule, MatChipsModule, MatProgressBarModule, MatCardModule, MatTabsModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

// import { ProfileService } from './services';


import {
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
    ProfileComponent,
    PersonalTracksComponent
} from './components';

export const __IMPORTS = [
    HttpClientModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatProgressBarModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
];

export const __DECLARATIONS = [
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
    ProfileComponent,
    PersonalTracksComponent
];

export const __PROVIDERS = [];

export const __ENTRY_COMPONENTS = [];
