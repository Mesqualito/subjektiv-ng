import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSuggestionComponent } from './blog-suggestion.component';

describe('BlogSuggestionComponent', () => {
  let component: BlogSuggestionComponent;
  let fixture: ComponentFixture<BlogSuggestionComponent>;

  beforeEach(async(() => {
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
