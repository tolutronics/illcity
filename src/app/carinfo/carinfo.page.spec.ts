import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarinfoPage } from './carinfo.page';

describe('CarinfoPage', () => {
  let component: CarinfoPage;
  let fixture: ComponentFixture<CarinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
