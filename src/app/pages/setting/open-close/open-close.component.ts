import { Component } from '@angular/core';
import { OpenCloseAnimation } from 'src/app/animations/';

@Component({
  selector: 'app-open-close',
  animations: OpenCloseAnimation.animations,
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],

})
export class OpenCloseComponent {

  isOpen = true;
  isHover = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onMouseenter() {
    this.isHover = true;
  }

  onMouseleave() {
    this.isHover = false;
  }

}
