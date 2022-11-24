import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvereesService } from './models/averees.service';
import { TableBulletin } from './models/bulletin-courant.model';

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

  emploiArray = ['Employé', 'Agent de maîtrise', 'Apprenti', 'Cadre'];

  constructor(public service: AvereesService) { 
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    for (let index = 0; index < 9; index++) {
      this.tableData.push({
        matricule: Math.round(Math.random() * (50000 - 1127) + 1),
        periode: "2021-06",
        contrat: Math.round(Math.random() * (2 - 1) + 1),
        bulletin: Math.round(Math.random() * (5 - 1) + 1),
      })
    }

    this.tableData = this.tableData.sort(function (a, b) {
      return a.matricule - b.matricule;
    });
    this.tableData[0].matricule = 1127;

    let matricule = Math.round(Math.random() * (50000 - 1127) + 1);
    let statut = this.emploiArray[Math.round(Math.random() * (3 - 0) + 0)];
    let bulletin = Math.round(Math.random() * (5 - 1) + 1);
    for (let index = 0; index < 28; index++) {
      this.tableData2.push({
        matricule: matricule,
        statut: statut,
        bulletin: bulletin,
        categorie: statut,
        libelle: 'Libellé',
        base: Math.round(Math.random() * (1500 - 1) + 1),
        t1:Math.round(Math.random() * (2 - 1) + 1),
        m1: Math.round(Math.random() * (2000 - 1) + 1),
        t2: Math.round(Math.random() * (2 - 1) + 1),
        m2: Math.round(Math.random() * (2500 - 1) + 1),
      })
    }

     this.service.setTableData(this.tableData2);
  }
}
