import { Component, OnInit,Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { ClientView, VaccinationView } from '../classViews';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.css']
})
export class DialogDataComponent implements OnInit {

  constructor(public dialogRefAdd: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientView, ) { }

  ngOnInit(): void {
    console.log("data", this.data)
    this.data = Object.values(this.data)[0];
    // console.log("data2", this.data2)

  }
  onNoClick(): void {
    this.dialogRefAdd.close();
  }
}
