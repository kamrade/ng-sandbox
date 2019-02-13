import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { LicenseConfigService } from 'src/app/building-blocks/services/license-config.service';

@Directive({
  selector: '[appPaywall]'
})
export class PaywallDirective implements OnInit {

  @Input() requiredLicense: number;
  elm: HTMLElement;

  constructor(element: ElementRef, private ren: Renderer2, private cfg: LicenseConfigService) {
    if (element && element.nativeElement) {
      this.elm = element.nativeElement;
    }
  }

  private checkLink(element: HTMLAnchorElement) {
    if (this.requiredLicense > this.cfg.currentLicense) {

      const span = this.ren.createElement('span');
      this.ren.addClass(span, 'paywall');
      span.title = 'Required additional license purchase';

      const txt = this.ren.createText('[$]');
      this.ren.appendChild(span, txt);
      const parent = this.ren.parentNode(element);
      this.ren.appendChild(parent, span);
    }
  }

  ngOnInit() {
    if (this.elm && this.elm instanceof HTMLAnchorElement) {
      this.checkLink(this.elm as HTMLAnchorElement);
    }
  }

}
