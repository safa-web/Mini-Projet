import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  styleUrls: ['./add-vetement.component.css']
})
export class AddVetementComponent implements OnInit {
  newVetement = new Vetement();

  constructor( private vetementService : VetementService) { }

  ngOnInit(): void {
  }
  addVetement(){
    //console.log(this.newVetement);
    this.vetementService.ajouterVetement(this.newVetement)
  
  }
}
