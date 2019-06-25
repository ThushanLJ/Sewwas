import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowladgeComponent } from './knowladge.component';

describe('KnowladgeComponent', () => {
  let component: KnowladgeComponent;
  let fixture: ComponentFixture<KnowladgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowladgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowladgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
