import { Component } from '@angular/core';
import { SlideInLeftAnimation } from 'src/app/animations/';

@Component({
  selector: 'app-root',
  animations: SlideInLeftAnimation.animations,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-components';

  showSidebar = true;
  showAdditionalSidebar = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
