import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDialogFormComponent } from './patient-dialog-form.component';

describe('PatientDialogFormComponent', () => {
  let component: PatientDialogFormComponent;
  let fixture: ComponentFixture<PatientDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
