import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1child2Component } from './page1child2.component';

describe('Page1child2Component', () => {
  let component: Page1child2Component;
  let fixture: ComponentFixture<Page1child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
