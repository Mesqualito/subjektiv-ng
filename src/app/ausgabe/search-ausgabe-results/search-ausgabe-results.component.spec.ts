import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {SearchAusgabeResultsComponent} from './search-ausgabe-results.component';

describe('SearchAusgabeResultsComponent', () => {
  let component: SearchAusgabeResultsComponent;
  let fixture: ComponentFixture<SearchAusgabeResultsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAusgabeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAusgabeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
