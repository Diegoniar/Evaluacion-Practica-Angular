import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { dataPlantas } from './dataPlantas';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})

export class PlantaComponent implements OnInit {
  plantas: Array<Planta> = [];
  constructor() { }

  getPlantasList(): Array<Planta>{
    return dataPlantas;
  }

  ngOnInit() {
    this.plantas = this.getPlantasList();
  }

}
