import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvernightPagePage } from './overnight-page.page';

describe('OvernightPagePage', () => {
  let component: OvernightPagePage;
  let fixture: ComponentFixture<OvernightPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvernightPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvernightPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
