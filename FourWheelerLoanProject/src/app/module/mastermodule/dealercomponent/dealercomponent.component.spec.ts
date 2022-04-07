import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealercomponentComponent } from './dealercomponent.component';

describe('DealercomponentComponent', () => {
  let component: DealercomponentComponent;
  let fixture: ComponentFixture<DealercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealercomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
