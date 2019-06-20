import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertaintmentComponent } from './entertaintment.component';

describe('EntertaintmentComponent', () => {
  let component: EntertaintmentComponent;
  let fixture: ComponentFixture<EntertaintmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertaintmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertaintmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
