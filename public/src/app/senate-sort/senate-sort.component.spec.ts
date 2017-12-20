import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenateSortComponent } from './senate-sort.component';

describe('SenateSortComponent', () => {
  let component: SenateSortComponent;
  let fixture: ComponentFixture<SenateSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenateSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenateSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
