import { Component, OnInit } from '@angular/core';
import { SenatorService } from './senator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchTerm: string;
  terms: string[];
  senators;
  isDataAvailable: boolean = false;

  constructor(
    private _ss: SenatorService
  ) {}

  ngOnInit() {
    this.getSenators();
    this.isDataAvailable = true;
  }

  getSenators(): void {                 // Checks the getSenators observable on the SenatorService
    this._ss.getSenators().subscribe(
      (data) => {
        this.senators = data['results'][0]['members'];
        this.getTerms();
      },
      (err) => console.error(err),
      () => console.log("Look at all those senators.")
    );
  }
  getTerms(): void {                    // Extracts the searchable terms from a sample Senator object.
    this.terms = [];
    let senator = this.senators[0];
    for (let property in senator) {
      if (senator.hasOwnProperty(property)) {
        this.terms.push(property);
      }
    }
  }
}
