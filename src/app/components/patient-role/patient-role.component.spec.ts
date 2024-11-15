import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRoleComponent } from './patient-role.component';

describe('PatientRoleComponent', () => {
  let component: PatientRoleComponent;
  let fixture: ComponentFixture<PatientRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
