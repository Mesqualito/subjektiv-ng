import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchAusgabeResultsComponent} from './search-ausgabe-results.component';

describe('SearchAusgabeResultsComponent', () => {
  let component: SearchAusgabeResultsComponent;
  let fixture: ComponentFixture<SearchAusgabeResultsComponent>;

  beforeEach(async(() => {
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
