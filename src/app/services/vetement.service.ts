import { Injectable } from '@angular/core';
import { Vetement } from '../model/vetement.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
providedIn: 'root'
})
export class VetementService {
  apiURL: string = 'http://localhost:8081/Vetement/api';
  vetements : Vetement[]; //un tableau de Vetement
    vetement : Vetement;
  router: any;
  VetementService: any;
    //VetementService :vetementService;
  constructor(private http :HttpClient) {
/*this.vetements = [
{ idVetement : 1, nomVetement : "Pontallon", prixVetement : 30.600, dateCreation
: new Date("01/14/2011")},{
idVetement : 2, nomVetement : "Pull", prixVetement : 10.200, dateCreation
: new Date("13/01/2020")},
{
  idVetement : 0, nomVetement : "Sac", prixVetement : 103.200, dateCreation
  : new Date("10/01/2010")},
];*/
}
consulterVetement(id:number): Observable< Vetement>{
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Vetement>(url);
  }
  
listeVetement():Observable< Vetement[]> {
  return this.http.get<Vetement[]>(this.apiURL);
}
ajouterVetement( prod: Vetement){
this.vetements.push(prod);
}
supprimerVetement(p: Vetement)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.VetementService.supprimerVetement(p.idVetement).subscribe(() => {
console.log("Vetement supprimé");
this.SuprimerVetementDuTableau(p);
});
}
SuprimerVetementDuTableau(prod : Vetement) {
  this.vetements.forEach((cur, index) => {
  if(prod.idVetement=== cur.idVetement) {
  this.vetements.splice(index, 1);
  }
  });
  }
 
  


  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
  
  //tri
  trierVetement(){
    this.vetements = this.vetements.sort((n1,n2) => {
    if (n1.idVetement > n2.idVetement) {
    return 1;
    }
    if (n1.idVetement < n2.idVetement) {
    return -1;
    }
    return 0;
    });
    }
    
  updateVetement(p:Vetement)
{
// console.log(p);
this.supprimerVetement(p);
this.ajouterVetement(p);
this.trierVetement();
}

}