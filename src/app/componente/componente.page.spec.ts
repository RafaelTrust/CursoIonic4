import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePage } from './componente.page';

describe('ComponentePage', () => {
  let component: ComponentePage;
  let fixture: ComponentFixture<ComponentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
