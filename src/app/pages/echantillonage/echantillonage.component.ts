import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echantillonage',
  templateUrl: './echantillonage.component.html',
  styleUrls: ['./echantillonage.component.scss']
})
export class EchantillonageComponent implements OnInit {
  etablissements : string[] = ["Terre Azure", "Passion Froid", "Epi Saveur", "Relais D'or",'Délices & Création',"Saveur d'Antoine"];
  categories : string[] =  ['Ouvrier', ' Employé', ' Cadre supérieur', ' Cadre', ' TAM',
  ' Assimilé cadre', ' IIIB'];
  conventions : string[] = ["Commerce de gros", "Commerce de détail et de gros à prédominance alimentaire", "Industries charcutières", "Confiserie, chocolaterie, biscuiterie",'VRP'];

  constructor() { }

  ngOnInit(): void {
  }

}
