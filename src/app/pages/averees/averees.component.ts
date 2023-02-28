import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvereesService } from './models/averees.service';
import { TableBulletin } from './models/bulletin-courant.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-averees',
  templateUrl: './averees.component.html',
  styleUrls: ['./averees.component.scss']
})
export class AvereesComponent implements OnInit {
  tableData = [];
  tableData2 = [];

  tables$: Observable<TableBulletin[]>;
  total$: Observable<number>;
  dataPas: any = [];
  //emploiArray = ['Employé', 'Agent de maîtrise', 'Apprenti', 'Cadre'];

  constructor(public service: AvereesService,public apiService : ApiService) { 
    this.tables$ = service.tables$;
    this.total$ = service.total$;
    this.apiService.getAnom_av().subscribe(data =>{
      this.dataPas =  data as object;
      
     
    });
  }

  ngOnInit() {
    
  }
}
