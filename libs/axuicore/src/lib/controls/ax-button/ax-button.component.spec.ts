/*
 * Copyright (c) 2019-2023 Takaq. All Rights Reserved.
 */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExButtonComponent} from './ax-button.component';

describe('ExButtonComponent', () => {
  let component: ExButtonComponent;
  let fixture: ComponentFixture<ExButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExButtonComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
