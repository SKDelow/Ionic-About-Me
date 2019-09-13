import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndInterestsPage } from './skills-and-interests.page';

describe('SkillsAndInterestsPage', () => {
  let component: SkillsAndInterestsPage;
  let fixture: ComponentFixture<SkillsAndInterestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsAndInterestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAndInterestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
