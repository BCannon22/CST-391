import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDrumset } from './delete-drumset';

describe('DeleteDrumset', () => {
  let component: DeleteDrumset;
  let fixture: ComponentFixture<DeleteDrumset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDrumset],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDrumset);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
