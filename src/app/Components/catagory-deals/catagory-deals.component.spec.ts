import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryDealsComponent } from './catagory-deals.component';

describe('CatagoryDealsComponent', () => {
  let component: CatagoryDealsComponent;
  let fixture: ComponentFixture<CatagoryDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
