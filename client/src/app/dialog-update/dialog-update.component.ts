import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClientView } from '../classViews';

// export interface DialogUpdate {
//   ID : string
//   FirstNameAndLastName : string
//   Address : string
//   DateOfBirth : Date
//   Phone : string
//   MobilePhone : string
//   DatePositiveResult : Date 
//   DateRecovery : Date
// }
@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {

  constructor(public dialogRefAdd: MatDialogRef<DialogUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public dataAdd: ClientView, ) { }

  ngOnInit(): void {
        this.dataAdd = Object.values(this.dataAdd)[0];
    console.log(this.dataAdd)

  }
 
  onNoClick(): void {
    this.dialogRefAdd.close();
  }
}
 