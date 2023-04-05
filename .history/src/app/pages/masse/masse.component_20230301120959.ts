import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MasseService } from './masse.service';
import { Table } from './masse.model';
import { ApiService } from 'src/app/core/services/api.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-masse',
  templateUrl: './masse.component.html',
  styleUrls: ['./masse.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MasseComponent implements OnInit {
  filterValues = {};
  
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website', 'status'];

  filterSelectObj = [];


  data1;
  data2 : any = [];
  dataSource = new MatTableDataSource(this.data2);
  dataMasse: any = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;
  constructor(public service: MasseService, public apiService : ApiService) {
     // Object to create Filter for
     this.filterSelectObj = [
      {
        name: 'ID',
        columnProp: 'id',
        options: []
      }, {
        name: 'NAME',
        columnProp: 'name',
        options: []
      }, {
        name: 'USERNAME',
        columnProp: 'username',
        options: []
      }, {
        name: 'EMAIL',
        columnProp: 'email',
        options: []
      }, {
        name: 'STATUS',
        columnProp: 'status',
        options: []
      }
    ]
    this.tables$ = service.tables$;
    this.total$ = service.total$;

    this.data1 = this.apiService.sayHi().subscribe(data =>{
      this.data1 =   data as object;
    });
    var etab = localStorage.getItem('etab');
    this.apiService.getMasse(etab).subscribe(data =>{
      this.dataMasse =  data as object;
      // this.dataMasse =  JSON.parse(data as string); 
    });

    // this.apiService.getAllEmployees().subscribe(data =>{
    //   this.data2 =  JSON.parse(data as string); 
    // });
    



  }
  
  

  tableData = [];

  emploiArray = ['Employé', 'Agent de maîtrise', 'Apprenti', 'Cadre', 'Stagiaire']
  vue_mensuelle = true;

  tableData2 = [{ matricule: 1127, categorie: "Cadre", libelle: "Salaire forfaitaire", base: 0, t1: 0, m1: 4319.49, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Heures rachat forfait jours", base: 4.75, t1: 31.3275, m1: 148.81, t2: 10, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Heures de dimanche", base: 4.75, t1: 42.7193, m1: 202.92, t2: 50, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Absence Congés payés", base: 1, t1: 166.1342, m1: 166.13, t2: 0, m2: 166.13 },
  { matricule: 1127, categorie: "Cadre", libelle: "Absence Congés payés", base: 5, t1: 166.1342, m1: 830.67, t2: 0, m2: 830.67 },
  { matricule: 1127, categorie: "Cadre", libelle: "Indemnité congés payés référence", base: 1, t1: 168.2202, m1: 168.22, t2: 0, m2: 168.22 },
  { matricule: 1127, categorie: "Cadre", libelle: "Indemnité congés payés référence", base: 5, t1: 168.2202, m1: 841.1, t2: 0, m2: 841.1 },
  { matricule: 1127, categorie: "Cadre", libelle: "**** BRUT FISCAL ****", base: 0, t1: 0, m1: 4683.74, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Maladie régime général", base: 4683.74, t1: 0, m1: 0, t2: 7, m2: 327.86 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Maladie régime général Cpt", base: 4683.74, t1: 0, m1: 0, t2: 6, m2: 281.02 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Allocations familiales", base: 4683.74, t1: 0, m1: 0, t2: 3.45, m2: 161.59 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Vieillesse déplafonnée", base: 4683.74, t1: 0.4, m1: 18.73, t2: 1.9, m2: 88.99 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Vieillesse tranche A", base: 3428, t1: 6.9, m1: 236.53, t2: 8.55, m2: 293.09 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF FNAL déplafonné", base: 4683.74, t1: 0, m1: 0, t2: 0.5, m2: 23.42 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Versement mobilité", base: 4683.74, t1: 0, m1: 0, t2: 2, m2: 93.67 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Contribution solidarité", base: 4683.74, t1: 0, m1: 0, t2: 0.3, m2: 14.05 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Contribution au dialogue social", base: 4683.74, t1: 0, m1: 0, t2: 0.016, m2: 0.75 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Accidents du travail", base: 4683.74, t1: 0, m1: 0, t2: 1.43, m2: 66.98 },
  { matricule: 1127, categorie: "Cadre", libelle: "Assurance Chômage", base: 4683.74, t1: 0, m1: 0, t2: 4.05, m2: 189.69 },
  { matricule: 1127, categorie: "Cadre", libelle: "Cotisation A.G.S.", base: 4683.74, t1: 0, m1: 0, t2: 0.15, m2: 7.03 },
  { matricule: 1127, categorie: "Cadre", libelle: "Retraite Agirc Arrco Tr. TU1", base: 3428, t1: 3.15, m1: 107.98, t2: 4.72, m2: 161.8 },
  { matricule: 1127, categorie: "Cadre", libelle: "Retraite Agirc Arrco Tr. TU2", base: 1255.74, t1: 8.64, m1: 108.5, t2: 12.95, m2: 162.62 },
  { matricule: 1127, categorie: "Cadre", libelle: "CEG Agirc Arrco Tr. TU1", base: 3428, t1: 0.86, m1: 29.48, t2: 1.29, m2: 44.22 },
  { matricule: 1127, categorie: "Cadre", libelle: "CEG Agirc Arrco Tr. TU2", base: 1255.74, t1: 1.08, m1: 13.56, t2: 1.62, m2: 20.34 },
  { matricule: 1127, categorie: "Cadre", libelle: "CET Agirc Arrco Tr.TU1", base: 3428, t1: 0.14, m1: 4.8, t2: 0.21, m2: 7.2 },
  { matricule: 1127, categorie: "Cadre", libelle: "CET Agirc Arrco Tr.TU2", base: 1255.74, t1: 0.14, m1: 1.76, t2: 0.21, m2: 2.64 },
  { matricule: 1127, categorie: "Cadre", libelle: "APEC Agirc Arrco Tr.1", base: 3428, t1: 0.024, m1: 0.82, t2: 0.036, m2: 1.23 },
  { matricule: 1127, categorie: "Cadre", libelle: "APEC Agirc Arrco Tr.2 limité à 4 PSS", base: 1255.74, t1: 0.024, m1: 0.3, t2: 0.036, m2: 0.45 },
  { matricule: 1127, categorie: "Cadre", libelle: "Prévoyance tr.A", base: 3428, t1: 0.22, m1: 7.54, t2: 1.95, m2: 66.85 },
  { matricule: 1127, categorie: "Cadre", libelle: "Prévoyance tr.B", base: 1255.74, t1: 0.99, m1: 12.43, t2: 1.21, m2: 15.19 },
  { matricule: 1127, categorie: "Cadre", libelle: "Prévoyance tr.C", base: 0, t1: 0.99, m1: 0, t2: 1.21, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Forfait Mutuelle Imposable", base: 0, t1: 0, m1: 7.38, t2: 0, m2: 30 },
  { matricule: 1127, categorie: "Cadre", libelle: "Taxe d'apprentissage", base: 4683.74, t1: 0, m1: 0, t2: 0.68, m2: 31.85 },
  { matricule: 1127, categorie: "Cadre", libelle: "Contribution supplémentaire d'apprentissage", base: 4683.74, t1: 0, m1: 0, t2: 0.05, m2: 2.34 },
  { matricule: 1127, categorie: "Cadre", libelle: "Effort construction ", base: 4683.74, t1: 0, m1: 0, t2: 0.45, m2: 21.08 },
  { matricule: 1127, categorie: "Cadre", libelle: "Cotisation C.S.E.", base: 4683.74, t1: 0, m1: 0, t2: 0.22, m2: 10.3 },
  { matricule: 1127, categorie: "Cadre", libelle: "Oeuvre Sociale C.S.E.", base: 4683.74, t1: 0, m1: 0, t2: 0.5, m2: 23.42 },
  { matricule: 1127, categorie: "Cadre", libelle: "Formation professionnelle", base: 4683.74, t1: 0, m1: 0, t2: 1, m2: 46.84 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF CSG déductible", base: 4713.81, t1: 6.8, m1: 320.54, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF forfait social", base: 112.04, t1: 0, m1: 0, t2: 8, m2: 8.96 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF forfait social taux 2", base: 6191.06, t1: 0, m1: 0, t2: 20, m2: 1238.21 },
  { matricule: 1127, categorie: "Cadre", libelle: "** TOTAL COTISATIONS **", base: 0, t1: 0, m1: 870.35, t2: 0, m2: 3443.68 },
  { matricule: 1127, categorie: "Cadre", libelle: "Part Patronale frais de santé", base: 0, t1: 0, m1: 30, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Net fiscal", base: 4683.74, t1: 870.35, m1: 7016.92, t2: 0, m2: 7016.92 },
  { matricule: 1127, categorie: "Cadre", libelle: "Forfait Mutuelle Non Imposable", base: 0, t1: 0, m1: 124.27, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Mutuelle - Surcomplémentaire", base: 0, t1: 0, m1: 1.8, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF CSG/CRDS", base: 4713.81, t1: 2.9, m1: 136.7, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Indemnités de tenue", base: 6.42, t1: 1, m1: 6.42, t2: 1, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Titres restaurants", base: 15, t1: 3.2, m1: 48, t2: 4.8, m2: 72 },
  { matricule: 1127, categorie: "Cadre", libelle: "NET A PAYER AVANT IMPOT SUR LE REVENU", base: 0, t1: 0, m1: 3509.04, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Dont évolution de la rémunération liée à la suppression des cotisations chômage et maladie", base: 67.41, t1: 0, m1: 0, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Impôt sur le revenu prélevé à la source", base: 3843.39, t1: 10.6, m1: 407.4, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Impôt sur l'actionnariat prélevé à la source []", base: 3173.53, t1: 10.6, m1: 336.39, t2: 0, m2: 305 },
  { matricule: 1127, categorie: "Cadre", libelle: "NET PAYE EN EUROS", base: 0, t1: 0, m1: 3101.64, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "TOTAL DES COTISATIONS  ET CONTRIBUTIONS", base: 0, t1: 0, m1: 1133.12, t2: 0, m2: 3443.68 },
  { matricule: 1127, categorie: "Cadre", libelle: "TOTAL VERSE PAR L'EMPLOYEUR", base: 8127.42, t1: 0, m1: 0, t2: 0, m2: 0 }];
  
  getRemoteData() {

    const remoteDummyData = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "status": "Active"
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "status": "Blocked"
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "status": "Blocked"
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "status": "Active"
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "status": "Active"
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "status": "In-Active"
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "phone": "210.067.6132",
        "website": "elvis.io",
        "status": "Active"
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "status": "In-Active"
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "status": "In-Active"
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "status": "Active"
      }
    ];
    this.dataSource.data = remoteDummyData;
  }


  ngOnInit() {
    this.getRemoteData();
  }

  getFilterObject(fullObj, key) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  filterChange(filter, event) {
    //let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }


  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }
}
