import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometabPage } from './hometab.page';

describe('HometabPage', () => {
  let component: HometabPage;
  let fixture: ComponentFixture<HometabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

      fixture = TestBed.createComponent(HometabPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
