import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogSuggestionComponent } from './blog-suggestion.component';

describe('BlogSuggestionComponent', () => {
  let component: BlogSuggestionComponent;
  let fixture: ComponentFixture<BlogSuggestionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
