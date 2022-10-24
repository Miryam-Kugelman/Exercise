import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ClientView, VaccinationView} from './classViews'
 
const httpOptions ={
  headers : new HttpHeaders({'Content-Type':'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url="https://localhost:44316/api"

  constructor(private http: HttpClient) { }
//get
  //get clients
  GetClients(){
    return this.http.get<ClientView[]>(`${this.url}/WebAPI/GetClients`)
  }
  //get vaccination
  GetVaccinations(){
    return this.http.get<VaccinationView[]>(`${this.url}/WebAPI/GetVaccinations`)
  }

//post
  // insert client
  InsertClient(newClient: ClientView){
    return this.http.post<ClientView>(`${this.url}/WebAPI/InsertClient`,newClient, httpOptions)
  }
  // insert vaccination
  InsertVaccination(newVaccination: VaccinationView){
    return this.http.post<VaccinationView>(`${this.url}/WebAPI/InsertVaccination`,newVaccination, httpOptions)
  }
//update  
  //update client
  UpdateClient(client: ClientView){
    return this.http.put<ClientView>(`${this.url}/WebAPI/UpdateClient`, client, httpOptions)
  }
  
//delete  
  //delete client
  DeleteClient(id : string){
    return this.http.delete<Boolean>(`${this.url}/WebAPI/DeleteClient/${id}`)
  }
}
