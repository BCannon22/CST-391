import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDrumsets } from './create-drumsets';

describe('CreateDrumsets', () => {
  let component: CreateDrumsets;
  let fixture: ComponentFixture<CreateDrumsets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDrumsets],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDrumsets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
