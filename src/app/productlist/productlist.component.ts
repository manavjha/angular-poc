import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../pokemon.service";
import { Employee } from '../model/employee';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  employee  = new Array<Employee>();

  public getCurrency(): string {
    return 'USD';
  }

  ngOnInit() {
    this.pokemonService.getEmployees().subscribe(data=>{
      this.employee = data;
    });
  }

}
