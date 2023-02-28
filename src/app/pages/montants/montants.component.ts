import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { MontantsService } from './montants.service';
import { Table } from './montants.model';

@Component({
  selector: 'app-montants',
  templateUrl: './montants.component.html',
  styleUrls: ['./montants.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MontantsComponent implements OnInit {
  dataMontant: any = [];
  chartOptions2:any;
  data: any=[];
  constructor(public service: MontantsService,public apiService : ApiService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
    var etab = localStorage.getItem('etab');
    this.apiService.getAMontant().subscribe(data =>{
      this.dataMontant =  data as object;
      //console.log(this.dataMontant.lenght())
      for (let i = 0; i < 20; i++) {
        console.log(this.dataMontant[i]["Degrès d'anomalie"])
      this.data.push([
      //     // risque:this.dataMontant[index]['Risque'], 
      //     // degres:this.dataMontant[index]['Risque'], 
      //     // erreur:this.dataMontant[index]['Erreur'],
           this.dataMontant[i]["Degrès d'anomalie"], 
           this.dataMontant[i]["Nombre d'erreurs"], 
           this.dataMontant[i]['Estimation du risque'],
          
         ])
        
        
       }
      console.log(this.data)
      //this.dataMontant[0]['Risque']
      this.chartOptions2 = {
        series: [
          {
            name: "Bubble1",
            data: this.data
          },
          {
            name: "Bubble2",
            data: [
              [2.6, 2, 2]
            ]
          }
        ],
        chart: {
          height: 450,
          type: "bubble",
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8
        },
        title: {},
        xaxis: {
          min: 1,
          max: 30,
          tickAmount: 4,
          tooltip: {
            enabled: true
          },
          decimalsInFloat: 0
        },
        yaxis: {
          min: 1,
          max: 2,
          decimalsInFloat: 0
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            }
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          custom: function({ series, seriesIndex, dataPointIndex, w }) {
            return '<div class="arrow_box" style="padding: 5px">' +
              '<span>' + '<b>Matricule</b> : 1724' + '</span>' +
              '</div>'
          }
        },
        zoom: {
          enabled: false
        }
    
    
      }
      // this.dataMasse =  JSON.parse(data as string); 
    });
    
  }

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  tableData = [];

  vue_mensuelle = true;
  
  chartOptions = {
    series: [
      {
        name: "Bubble1",
        data: [
          [2.6, 0, 10],
          [2.7, 0, 10],
          [2.65, -1, 7.5],
          [2.6, -3, 5],
          [1.6, -1, 7.5],
          [1.7, 0, 8.5],
          [1.75, -2, 6.5],
          [1.83, 0.2, 12],
          [2, 0.4, 14],
          [4, 0, 7.5],
          [3.9, -2, 4.5],
        ]
      },
      {
        name: "Bubble2",
        data: [
          [2.6, 25, 30]
        ]
      }
    ],
    chart: {
      height: 450,
      type: "bubble",
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0.8
    },
    title: {},
    xaxis: {
      min: 1,
      max: 5,
      tickAmount: 4,
      tooltip: {
        enabled: true
      },
      decimalsInFloat: 0
    },
    yaxis: {
      min: -5,
      max: 30,
      decimalsInFloat: 0
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        }
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        return '<div class="arrow_box" style="padding: 5px">' +
          '<span>' + '<b>Matricule</b> : 1724' + '</span>' +
          '</div>'
      }
    },
    zoom: {
      enabled: false
    }


  };

  indicationArray = [
    'Brut incompatible au statut', 'Variation anormale du Brut sur l\'année',
    'Assiette de cotisation anormale', 'Non correspondance entre les retenues et les indemnités',
    'Saisie sur rémuneration avec montants différents sur le m/m-1', 'Primes avec montant élévé',
    'Brut inférieur au SMIC', 'Base d\'absence anormale'
  ]

  ngOnInit() {
    for (let index = 0; index < 20; index++) {
      let randomNb = Math.round(Math.random() * (7 - 0) + 0);
      let item = this.indicationArray[randomNb]

      this.tableData.push({
        matricule: Math.round(Math.random() * (50000 - 1127) + 1),
        indication: item
      })
    }

    this.tableData[0].matricule = '1724';
    this.tableData[0].indication = 'Variation anormale du Brut sur l\'année';

    this.service.setTableData(this.tableData);
  }
}
