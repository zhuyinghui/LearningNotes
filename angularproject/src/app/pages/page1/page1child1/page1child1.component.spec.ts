import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1child1Component } from './page1child1.component';

describe('Page1child1Component', () => {
  let component: Page1child1Component;
  let fixture: ComponentFixture<Page1child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
