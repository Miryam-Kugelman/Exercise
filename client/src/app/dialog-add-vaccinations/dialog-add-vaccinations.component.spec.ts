import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddVaccinationsComponent } from './dialog-add-vaccinations.component';

describe('DialogAddVaccinationsComponent', () => {
  let component: DialogAddVaccinationsComponent;
  let fixture: ComponentFixture<DialogAddVaccinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddVaccinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddVaccinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
