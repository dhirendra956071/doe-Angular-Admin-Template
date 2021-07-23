import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../../shared/sidebar/sidebar.service';

@Component({
  selector: 'app-full-content-layout',
  templateUrl: './full-content-layout.component.html',
  styleUrls: ['./full-content-layout.component.scss']
})
export class FullContentLayoutComponent implements OnInit {

  constructor(public sidebarservice: SidebarService) { }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  ngOnInit(): void {
  }

}
