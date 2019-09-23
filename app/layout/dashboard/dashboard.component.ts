import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Patient } from '../../model/Patient';
import { MatDialog } from '@angular/material/dialog';
import { PatientDialogFormComponent } from './PatientForm/patient-dialog-form/patient-dialog-form.component';
import { PatientService } from '../../services/patient.service';
import { interval } from 'rxjs';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
  // const data: Patient[] = [
  //   {id: '1', name: 'White', lastName: 'Sam', tel: '6595478512',address: 'USA' ,job: 'Telecom engineer'},
  //   {id: '2', name: 'Abby', lastName: 'Jaden', tel: '5412836985',address: 'France' ,job: 'Manager'},
  //   {id: '3', name: 'Alchemy', lastName: 'Jace', tel: '2413695471',address: 'USA' ,job: 'Developer'},
  //   {id: '4', name: 'Len', lastName: 'Mike', tel: '6947552574',address: 'USA' ,job: 'bank officer'},
  //   {id: '5', name: 'Monrow', lastName: 'Nevaeh', tel: '3366942585',address: 'USA' ,job: 'economist'},
  // ];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
    displayedColumns: string[] = ['name', 'lastName', 'tel', 'address', 'job'];
    dataSource = new MatTableDataSource(this.patientService.getPatients());
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    animal: string;
    name: string;
    constructor(public dialog: MatDialog, private patientService: PatientService) {}

    ngOnInit() {
      console.log(this.patientService.getPatients());
        
    // setTimeout(()=>{    //<<<---    using ()=> syntax
    //   this.patientService.addPatient(new Patient('23','sd',',llm','kf',';','m'));
    //   console.log(this.patientService.getPatients());
    //   this.dataSource = new MatTableDataSource(this.patientService.getPatients());
    // }, 3000);

    let x = setInterval( ()=>{
      this.dataSource = new MatTableDataSource(this.patientService.getPatients());
    },100);
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(PatientDialogFormComponent, {
        height: '350px',
        width: '600px',
        data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }

    ajouterPatient(){
      console.log('qdqs')
      this.patientService.addPatient(new Patient('23','sd',',llm','kf',';','m'));
      console.log(this.patientService.getPatients());
      this.dataSource = new MatTableDataSource(this.patientService.getPatients());
  
    }
}