import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDrumsets } from './display-drumsets';

describe('DisplayDrumsets', () => {
  let component: DisplayDrumsets;
  let fixture: ComponentFixture<DisplayDrumsets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDrumsets],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayDrumsets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
