import { Component } from '@angular/core';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent {

  public count: number = 0;

  public addCount() {
    this.count++;
  }

}
