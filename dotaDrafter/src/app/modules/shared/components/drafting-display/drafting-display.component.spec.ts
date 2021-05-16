import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftingDisplayComponent } from './drafting-display.component';

describe('DraftingDisplayComponent', () => {
  let component: DraftingDisplayComponent;
  let fixture: ComponentFixture<DraftingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
