import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepolelistComponent } from './pepolelist.component';

describe('PepolelistComponent', () => {
  let component: PepolelistComponent;
  let fixture: ComponentFixture<PepolelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepolelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PepolelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
