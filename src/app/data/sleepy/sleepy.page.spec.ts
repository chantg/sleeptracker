import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepyPage } from './sleepy.page';

describe('SleepyPage', () => {
  let component: SleepyPage;
  let fixture: ComponentFixture<SleepyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
