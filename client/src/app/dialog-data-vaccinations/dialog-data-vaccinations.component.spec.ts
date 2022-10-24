import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDataVaccinationsComponent } from './dialog-data-vaccinations.component';

describe('DialogDataVaccinationsComponent', () => {
  let component: DialogDataVaccinationsComponent;
  let fixture: ComponentFixture<DialogDataVaccinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDataVaccinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDataVaccinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
