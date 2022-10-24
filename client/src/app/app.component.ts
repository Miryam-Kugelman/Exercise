import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import { ClientView, VaccinationView} from './classViews'
import { HttpService } from './http.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import { DialogAddVaccinationsComponent } from './dialog-add-vaccinations/dialog-add-vaccinations.component';
import { DialogDataVaccinationsComponent } from './dialog-data-vaccinations/dialog-data-vaccinations.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exercises-client';

  clients : ClientView[] = [];
  vaccinations : VaccinationView[] = [];
  vaccinationsID : VaccinationView[] = [];

  client  !: ClientView;
  vaccination !: VaccinationView;

  displayedColumns: string[] = ['ID', 'FirstNameAndLastName', 'button'];
  dataSource = this.clients;
  

  constructor(private service : HttpService, public dialog: MatDialog) {}
  ngOnInit( ): void {
    this.clients  = [];
    this.vaccinations  = [];
    this.vaccinationsID  = [];

    this.service.GetClients().subscribe(
      (clients) => {
        this.clients = clients;
        this.dataSource = clients;

        console.log(clients);
        this.service.GetVaccinations().subscribe(
          (vaccinations) => {
            this.vaccinations = vaccinations;
            console.log(vaccinations);
          },
          (err) => {
            console.log(err);
            return(err)
          }
        );
      },
      (err) => {
        console.log(err);
        return(err)
      }
    );

    

  }
  enterNew(){
    const dialogRefAdd = this.dialog.open(DialogAddComponent, {
      width: '50%',
      data: {addClient : this.client}
    });
    dialogRefAdd.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result)
      this.client = result;
      console.log(this.client);
      this.service.InsertClient(this.client).subscribe(
        (result) => {
          console.log(result)
          this.ngOnInit();
        },
        (err) => {
               console.log(err);
               return(err)
        }
      );
    }); 
    
  }
  
  openData(id : string){
    
    this.clients.forEach(element => {
      if(element.ID == id){
        this.client = element;
      }
    });
    
     console.log(this.client)
     console.log(this.vaccinationsID)
     const dialogRefAdd = this.dialog.open(DialogDataComponent, {
      width: '50%',
      data: {client : this.client}
        // , vaccination: this.vaccinationsID}
    });
    dialogRefAdd.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result)
      this.client = result;
      console.log(this.client);
    }); 

    
  }
  openDataVaccinations(id: string){
    var i =0;
    this.vaccinationsID = [];
    this.vaccinations.forEach(element => {
      if(element.ClientID == id){
        this.vaccinationsID[i] = element;
        i++;
      }
    });
    const dialogRefAdd = this.dialog.open(DialogDataVaccinationsComponent, {
      width: '50%',
      data: {vaccinations : this.vaccinationsID}
        // , vaccination: this.vaccinationsID}
    });
    dialogRefAdd.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result)
      this.client = result;
      console.log(this.client);
    }); 

  }
  openDelete(id : string){
    console.log(id)
    this.service.DeleteClient(id).subscribe(
      (result) => {
        console.log(result);
        this.ngOnInit();
      }
    )

  }
  openAddVaccinations(id: string){
    // this.vaccination.forEach(element => {
    //   if(element.ClientID == id){
    //     this.vaccination = element;
    //   }
    // });
    const dialogRefAdd = this.dialog.open(DialogAddVaccinationsComponent, {
      width: '50%',
      data: {addVaccination : this.vaccination}
    });
    dialogRefAdd.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result)
      this.vaccination = result;
      console.log("חיסון חדש",this.vaccination);
      this.vaccination.ClientID = id;
       console.log("חיסון חדש 2", this.vaccination)
      this.service.InsertVaccination(this.vaccination).subscribe(
        (result) => {
          console.log(result)
          this.ngOnInit();
        },
        (err) => {
               console.log(err);
               return(err)
        }
      );
    }); 
  }
  openUpdate(id : string){
    this.clients.forEach(element => {
      if(element.ID == id){
        this.client = element;
      }
    });
    
    console.log("client:",this.client);
    const dialogRefAdd = this.dialog.open(DialogUpdateComponent, {
      width: '50%',
     
      data: {addClient : this.client}
      
    });
    dialogRefAdd.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result)
      this.client = result;
      console.log("newClient",this.client);
      this.service.UpdateClient(this.client).subscribe(
        (result) => {
          console.log(result)
          this.ngOnInit();
        },
        (err) => {
               console.log(err);
               return(err)
        }
      );
    }); 
  }
  
 }
  