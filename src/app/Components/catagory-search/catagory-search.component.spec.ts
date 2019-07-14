import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagorySearchComponent } from './catagory-search.component';

describe('CatagorySearchComponent', () => {
  let component: CatagorySearchComponent;
  let fixture: ComponentFixture<CatagorySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagorySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
