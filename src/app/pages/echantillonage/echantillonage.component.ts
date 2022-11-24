import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echantillonage',
  templateUrl: './echantillonage.component.html',
  styleUrls: ['./echantillonage.component.scss']
})
export class EchantillonageComponent implements OnInit {
  etablissements : string[] = ["Tous", "Etab1", "Etab2", "Etab3"];
  categories : string[] = ["Toutes", "Cadre", "Expatrié"];
  conventions : string[] = ["Toutes", "CCN1", "CCN2", "CCN3"];

  constructor() { }

  ngOnInit(): void {
  }

}
