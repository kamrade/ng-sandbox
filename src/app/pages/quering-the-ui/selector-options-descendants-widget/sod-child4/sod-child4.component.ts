import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sod-child4',
  templateUrl: './sod-child4.component.html',
  styleUrls: ['./sod-child4.component.scss']
})
export class SodChild4Component {

  @Input() location: string;
  Prop4: 'This is property of Child4'

  vc  = false;
  cc  = false;
  cc2 = false;
  cc3 = false;

}
