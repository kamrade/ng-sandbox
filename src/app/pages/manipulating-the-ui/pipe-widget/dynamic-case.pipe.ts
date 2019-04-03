import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicCase'
})
export class DynamicCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return value;
    }
    switch (args) {
      case 'AllCaps':
        return value.toUpperCase();
      case 'AllLower':
        return value.toLowerCase();
      case 'Title':
        return this.toTitleCase(value);
      default:
        return value;
    }
  }

  private toTitleCase(value: string) {
    return value.split(/\b/g).map(word => this.titleCaseWord(word)).join('');
  }
  private titleCaseWord(word: string) {
    if (!word) {
      return word;
    }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }


}
