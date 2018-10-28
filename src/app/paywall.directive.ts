import { Directive, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPaywall]'
})
export class PaywallDirective implements OnInit {

  @Input() requiredText: string;
  @Input() requiredLicense: number;
  elm: HTMLElement;

  constructor(element: ElementRef, private renderer: Renderer2) {
    if (element && element.nativeElement) {
      this.elm = element.nativeElement
    }
  }

  private checkLink(element: HTMLAnchorElement) {
    if (this.requiredLicense > 1) {
      const span = this.renderer.createElement('span');
      this.renderer.addClass(span, 'paywall');
      span.title = 'Requires additional license purchase'

      const txt = this.renderer.createText(this.requiredText || '-$-');
      this.renderer.appendChild(span, txt);
      const parent = this.renderer.parentNode(element);
      this.renderer.appendChild(parent, span);
    }
  }

  ngOnInit():void {
    if (this.elm && this.elm instanceof HTMLAnchorElement) {
      this.checkLink(this.elm as HTMLAnchorElement);
    }
  }

}
