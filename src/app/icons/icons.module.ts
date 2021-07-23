import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { FontAwesomeIconsComponent } from './font-awesome-icons/font-awesome-icons.component';
import { MaterialDesignComponent } from './material-design-icons/material-design.component';
import { BoxiconsComponent } from './boxicons/boxicons.component';


@NgModule({
  declarations: [
    FontAwesomeIconsComponent,
    MaterialDesignComponent,
    BoxiconsComponent],
  imports: [
    CommonModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }
