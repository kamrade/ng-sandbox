import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SorChildComponent } from './sor-child/sor-child.component';

import { ModalService } from 'src/app/shared-components/modal/modal.service';

@Component({
  selector: 'app-selector-options-widget',
  templateUrl: './selector-options-widget.component.html',
  styleUrls: ['./selector-options-widget.component.scss']
})
export class SelectorOptionsWidgetComponent implements AfterViewInit {

  dropdownElements = [{
    value: 'mercedes',
    title: 'Mercedes'
  }, {
    value: 'toyota',
    title: 'Toyota'
  }, {
    value: 'nissan',
    title: 'Nissan'
  }];

  // A
  // Here we get actual component
  @ViewChild(SorChildComponent) child: SorChildComponent;
  @ViewChild('child') child2: SorChildComponent;

  // B
  @ViewChild(SorChildComponent, { read: ElementRef }) childElem: ElementRef;
  @ViewChild('child', { read: ElementRef }) child2Elem: ElementRef;

  // C
  @ViewChild('title') title: ElementRef;
  @ViewChild('title', { read: ElementRef}) titleElem: ElementRef;

  ngAfterViewInit(): void {
    // A
    // console.log(this.child2);
    // B
    console.log(this.childElem);
    console.log(this.child2Elem);

    // C
    // console.log(this.title);
    // console.log(this.titleElem);
  }

  constructor(public modalService: ModalService) {}

  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }

}
