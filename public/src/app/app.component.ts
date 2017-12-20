import { Component, OnInit } from '@angular/core';
import { SenatorService } from './senator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  term;
  senators;
  isDataAvailable: boolean = false;

  constructor(
    private _ss: SenatorService
  ) {}

  ngOnInit() {
    this.getSenators();
    this.isDataAvailable = true;
  }

  getSenators() {
    this._ss.getSenators().subscribe(
      (data) => this.senators = data['results'][0]['members'],
      (err) => console.error(err),
      () => console.log("Look at all those senators.")
    );
  }
}
