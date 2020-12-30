import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {SearchBlogResultsComponent} from './search-blog-results.component';

describe('SearchBlogResultsComponent', () => {
  let component: SearchBlogResultsComponent;
  let fixture: ComponentFixture<SearchBlogResultsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlogResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlogResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
