import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/model/Patient';

@Component({
  selector: 'app-patient-dialog-form',
  templateUrl: './patient-dialog-form.component.html',
  styleUrls: ['./patient-dialog-form.component.scss']
})
export class PatientDialogFormComponent implements OnInit {

  name;string;
  lastName:string;
  tel:string;
  address;
  job:string;
  constructor(private patientService: PatientService) {

   }

  ngOnInit() {
  }

  ajouterPatient(){
    console.log('qdqs')
    this.patientService.addPatient(new Patient('23','sd',',llm','kf',';','m'));
    console.log(this.patientService.getPatients());
    console.log(this.address)        // let paS = new PatientService;
    // let dashboardComponent = new DashboardComponent(null, paS );
    // dashboardComponent.ajouterPatient();

  }
  onClear(){
    console.log('qdqs');
    this.patientService.addPatient(new Patient(this.name+this.lastName+this.tel,this.name,this.lastName,this.tel,this.address,this.job));
    console.log(this.patientService.getPatients());
    console.log(this.address) 

  }

}
