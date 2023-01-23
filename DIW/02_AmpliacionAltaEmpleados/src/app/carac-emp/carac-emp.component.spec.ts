import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracEmpComponent } from './carac-emp.component';

describe('CaracEmpComponent', () => {
  let component: CaracEmpComponent;
  let fixture: ComponentFixture<CaracEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
