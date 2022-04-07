import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMoreDetailsComponent } from './emp-more-details.component';

describe('EmpMoreDetailsComponent', () => {
  let component: EmpMoreDetailsComponent;
  let fixture: ComponentFixture<EmpMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpMoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
