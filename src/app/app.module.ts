import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { FullContentLayoutComponent } from './layouts/full-content-layout/full-content-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared//sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from './shared/sidebar/sidebar.service';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    FullContentLayoutComponent,
    NavbarComponent, 
    SidebarComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    PerfectScrollbarModule

  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
