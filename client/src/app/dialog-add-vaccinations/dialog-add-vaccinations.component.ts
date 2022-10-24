import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogAdd {
  ClientID : string
  NumberVaccination : number
  DateVaccination : Date
  VaccineManufacturer : string
  ID : number
}

@Component({
  selector: 'app-dialog-add-vaccinations',
  templateUrl: './dialog-add-vaccinations.component.html',
  styleUrls: ['./dialog-add-vaccinations.component.css']
})
export class DialogAddVaccinationsComponent implements OnInit {

  constructor(public dialogRefAdd: MatDialogRef<DialogAddVaccinationsComponent>,
    @Inject(MAT_DIALOG_DATA) public dataAdd: DialogAdd, ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRefAdd.close();
  }
}
