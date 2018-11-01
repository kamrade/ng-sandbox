import { Component, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.scss']
})
export class ViewContainerRefComponent {

  widgetTitle='ViewContainerRef';

  @ViewChild('vcr1', { read: ViewContainerRef }) vcr1: ViewContainerRef;
  @ViewChild('vcr2', { read: ViewContainerRef }) vcr2: ViewContainerRef;

  @ViewChild('t1') t1: TemplateRef<any>;
  @ViewChild('t2') t2: TemplateRef<any>;
  @ViewChild('t3') t3: TemplateRef<any>;

  addTemplate1() {
    this.vcr1.createEmbeddedView(this.t1);
  }

  addTemplate2() {
    this.vcr2.createEmbeddedView(this.t2);
  }

  vcr1IsEmpty() {
    return this.vcr1.length === 0;
  }

  vcr2IsEmpty() {
    return this.vcr2.length === 0;
  }

  clearVCR1() {
    this.vcr1.clear();
  }

  clearVCR2() {
    this.vcr2.clear();
  }

}
