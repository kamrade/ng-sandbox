import { Component, HostListener, OnInit } from '@angular/core';
import { SidebarAnimation } from 'src/app/animations/';

@Component({
  selector: 'app-root',
  animations: SidebarAnimation.animations,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'my-dream-components';
  showSidebar = true;
  showAdditionalSidebar = false;
  windowInnerWidth: Number;
  hiddenSidebar: Boolean;
  sidebarBreakpoint = 960;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowInnerWidth = event.target.innerWidth;
    this.setSidebarStatus();
  }

  ngOnInit() {
    this.windowInnerWidth = window.innerWidth;
    this.setSidebarStatus();
  }

  setSidebarStatus() {
    // Здесь можно было бы setter заюзать, мне кажется
    this.hiddenSidebar = this.windowInnerWidth > this.sidebarBreakpoint;
    this.showSidebar = this.windowInnerWidth > this.sidebarBreakpoint;
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
