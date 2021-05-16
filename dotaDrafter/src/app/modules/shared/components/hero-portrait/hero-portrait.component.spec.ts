import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPortraitComponent } from './hero-portrait.component';

describe('HeroPortraitComponent', () => {
  let component: HeroPortraitComponent;
  let fixture: ComponentFixture<HeroPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroPortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
