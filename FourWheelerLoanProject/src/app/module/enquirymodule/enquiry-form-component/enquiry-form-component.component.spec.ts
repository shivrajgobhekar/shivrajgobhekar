import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryFormComponentComponent } from './enquiry-form-component.component';

describe('EnquiryFormComponentComponent', () => {
  let component: EnquiryFormComponentComponent;
  let fixture: ComponentFixture<EnquiryFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
