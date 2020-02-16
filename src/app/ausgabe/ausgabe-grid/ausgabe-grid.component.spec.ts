import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AusgabeGridComponent} from './ausgabe-grid.component';

describe('AusgabeGridComponent', () => {
  let component: AusgabeGridComponent;
  let fixture: ComponentFixture<AusgabeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusgabeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusgabeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
