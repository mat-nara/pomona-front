import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
@Component({
  selector: 'app-bulrubrique',
  templateUrl: './bulrubrique.component.html',
  styleUrls: ['./bulrubrique.component.scss']
})
export class BulrubriqueComponent implements OnInit {
  bpdetail: any = [];
  bulrubrique: any = [];
  matricule;
  rub:any;
  
  constructor(public apiService : ApiService, private route : ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      console.log('>>>> params '+params);
      this.matricule = params['matricule'];
    })
    console.log(">>>>>>"+this.matricule)
    // this.apiService.getBPDetails(this.matricule).subscribe(data =>{
    //   this.bpdetail =  data; 
    // });
    var etab = localStorage.getItem('etab');
    this.apiService.getRubriques_mat(etab,this.matricule).subscribe(data =>{
     this.bulrubrique =  data as object;
    //   // this.dataMasse =  JSON.parse(data as string); 
    });
    
  }

}

