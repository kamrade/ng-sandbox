import { Component, ContentChildren, TemplateRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-template-ref-selector-child',
  templateUrl: './template-ref-selector-child.component.html',
  styleUrls: ['./template-ref-selector-child.component.scss']
})
export class TemplateRefSelectorChildComponent {

  @ContentChildren(TemplateRef) allContent: QueryList<TemplateRef<any>>;
  @ViewChildren(TemplateRef) allViews: QueryList<TemplateRef<any>>;
  @ContentChildren('content1, content3') someContent: QueryList<TemplateRef<any>>;
  showChildCounts = false;

  countChildren() {
    this.showChildCounts = !this.showChildCounts;
    console.log(this.someContent);
  }

}
