import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocterRoleComponent } from './docter-role.component';

describe('DocterRoleComponent', () => {
  let component: DocterRoleComponent;
  let fixture: ComponentFixture<DocterRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocterRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocterRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
