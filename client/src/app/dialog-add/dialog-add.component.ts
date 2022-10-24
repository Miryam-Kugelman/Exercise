import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogAdd {
  ID : string
  FirstNameAndLastName : string
  Address : string
  DateOfBirth : Date
  Phone : string
  MobilePhone : string
  DatePositiveResult : Date 
  DateRecovery : Date
}

  
@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {

  constructor(
    public dialogRefAdd: MatDialogRef<DialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public dataAdd: DialogAdd, 
  ) {}

  

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRefAdd.close();
  }

}
