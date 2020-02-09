import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusgabeDetailComponent } from './ausgabe-detail.component';

describe('AusgabeDetailComponent', () => {
  let component: AusgabeDetailComponent;
  let fixture: ComponentFixture<AusgabeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusgabeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusgabeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
