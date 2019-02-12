import { Component, ContentChildren, TemplateRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-templateref-child',
  templateUrl: './templateref-child.component.html',
  styleUrls: ['./templateref-child.component.scss']
})
export class TemplaterefChildComponent {

  @ContentChildren(TemplateRef) allContent: QueryList<TemplateRef<any>>
  @ViewChildren(TemplateRef) allViews: QueryList<TemplateRef<any>>
  @ContentChildren('content1, content3') someContent: QueryList<TemplateRef<any>>
  showChildCounts = false;

  countChildren() {
    this.showChildCounts = !this.showChildCounts;
    console.log(this.someContent);
  }

}
