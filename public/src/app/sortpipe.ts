import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe',
  pure: false
})

@Injectable()
export class SortPipe implements PipeTransform {
  transform(senators, term): any[] {
    if (!senators) return [];
    return senators 
      ? senators.sort(this.sortFunction) 
      : [];
  }
  sortFunction(senator_a, senator_b, term) {
    const a = senator_a[term];
    const b = senator_b[term];
    let comparison = 0;
    if ( a > b ) {
      comparison = -1;
    } else if ( a < b ) {
      comparison = 1;
    }
    return comparison;
  }
}