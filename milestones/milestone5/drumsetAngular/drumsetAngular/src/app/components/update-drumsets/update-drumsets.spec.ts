import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDrumsets } from './update-drumsets';

describe('UpdateDrumsets', () => {
  let component: UpdateDrumsets;
  let fixture: ComponentFixture<UpdateDrumsets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDrumsets],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDrumsets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
