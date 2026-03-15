import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrumsetsComponent } from './list-drumsets.component';

describe('DrumsetsComponent', () => {
  let component: DrumsetsComponent;
  let fixture: ComponentFixture<DrumsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrumsetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrumsetsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
