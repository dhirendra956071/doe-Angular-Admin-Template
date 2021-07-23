import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeIconsComponent } from './font-awesome-icons/font-awesome-icons.component';
import { MaterialDesignComponent } from './material-design-icons/material-design.component';
import { BoxiconsComponent } from './boxicons/boxicons.component';


const routes: Routes = [

  {
    path: '',
    children: [    
      {
        path: 'font-awesome-icons',
        component: FontAwesomeIconsComponent,
        data: {
          title: 'Font Awesome-Icons'
        }
      },
      {
        path: 'boxicons',
        component: BoxiconsComponent,
        data: {
          title: 'Boxicons'
        }
      },    
      {
        path: 'material-design-icons',
        component: MaterialDesignComponent,
        data: {
          title: 'Material Design Icons'
        }
      }         
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
