import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public sidebarservice: SidebarService) { }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
      
      if ($(".wrapper").hasClass("toggled")) {
        // unpin sidebar when hovered
        $(".wrapper").removeClass("toggled");
        $(".sidebar-wrapper").unbind( "hover");
    } else {
        $(".wrapper").addClass("toggled");
        $(".sidebar-wrapper").hover(
            function () {
                $(".wrapper").addClass("sidebar-hovered");
            },
            function () {
                $(".wrapper").removeClass("sidebar-hovered");
            }
        )

    }
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  // Messages Load More Button
  loadMore(){
    $('#messages').removeClass('sr-only');
  }

  ngOnInit(): void {
  }
}
