import { Component, OnInit, AfterViewInit,  ContentChild, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-toggle-view-content',
  templateUrl: './toggle-view-content.component.html',
  styleUrls: ['./toggle-view-content.component.scss']
})
export class ToggleViewContentComponent implements OnInit, AfterViewInit {

  @ContentChild('content') content: TemplateRef<any>;
  @ViewChild('view') view: TemplateRef<any>;
  showViewTemplate = true;
  liveTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    // this.liveTemplate = this.view;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.liveTemplate = this.view;
    }, 0);
  }

  toggleTemplateSelected() {
    this.showViewTemplate = !this.showViewTemplate;
    this.liveTemplate = this.showViewTemplate ? this.view : this.content;
  }

}
