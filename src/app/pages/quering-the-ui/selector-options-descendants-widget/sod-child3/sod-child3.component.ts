import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sod-child3',
  templateUrl: './sod-child3.component.html',
  styleUrls: ['./sod-child3.component.scss']
})
export class SodChild3Component {

  @Input() location: string;

  Prop3 = 'This is a property on Child3';

  vc  = false;
  cc  = false;
  cc2 = false;

}
