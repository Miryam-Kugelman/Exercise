import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VaccinationView } from '../classViews';

@Component({
  selector: 'app-dialog-data-vaccinations',
  templateUrl: './dialog-data-vaccinations.component.html',
  styleUrls: ['./dialog-data-vaccinations.component.css']
})
export class DialogDataVaccinationsComponent implements OnInit {

  constructor(public dialogRefAdd: MatDialogRef<DialogDataVaccinationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VaccinationView,) { }

  ngOnInit(): void {
    var i =0;
    
    this.data = Object.values(this.data)[0][0];
    // data1.forEach(element => {
    //   data1[i] = Object.values(element)[0];
    //   i++;
    // });
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRefAdd.close();
  }
}
