import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DropdownOptions } from './dropdown.model';
import { SelectionItemElement } from 'src/app/models/selection-item';

@Component({
  selector: 'cpa-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input()  options: DropdownOptions;
  @Output() choise = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  choose(item: SelectionItemElement) {
    this.choise.emit(item);
  }

}
