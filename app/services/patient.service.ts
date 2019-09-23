import { Injectable } from '@angular/core';
import { Patient } from '../model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  data: Patient[] = [
    {id: '1', name: 'White', lastName: 'Sam', tel: '6595478512',address: 'USA' ,job: 'Telecom engineer'},
    {id: '2', name: 'Abby', lastName: 'Jaden', tel: '5412836985',address: 'France' ,job: 'Manager'},
    {id: '3', name: 'Alchemy', lastName: 'Jace', tel: '2413695471',address: 'USA' ,job: 'Developer'},
    {id: '4', name: 'Len', lastName: 'Mike', tel: '6947552574',address: 'USA' ,job: 'bank officer'},
    {id: '5', name: 'Monrow', lastName: 'Nevaeh', tel: '3366942585',address: 'USA' ,job: 'economist'},
  ];
  constructor() { }
  addPatient(patient : Patient){
    this.data.push(patient);
    console.log('Patent added sucessfully !')
  }
  getPatients(){
    return this.data;
  }
}
