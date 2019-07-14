import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStoryComponent } from './blog-story.component';

describe('BlogStoryComponent', () => {
  let component: BlogStoryComponent;
  let fixture: ComponentFixture<BlogStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
