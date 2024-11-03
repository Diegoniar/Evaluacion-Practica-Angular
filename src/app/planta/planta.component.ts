import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { dataPlantas } from './dataPlantas';
import { PlantaService } from './planta.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})

export class PlantaComponent implements OnInit {
  plantas: any;
  constructor(private plantaService: PlantaService) { }

  getPlantasList(): Array<Planta>{
    return dataPlantas;
  }

  //obtenerPlantas(): void{
    //this.plantaService.obtenerPlantas().subscribe((plantas) =>{
      //this.plantas = plantas;
    //});
  //}

  ngOnInit() {
    this.plantaService.getPlantas().subscribe({
      next: (plantas: any) =>{
        this.plantas = plantas
        console.log (this.plantas)
      },
      error: (err: any) =>{
        console.error(err)
      },
      complete:()=>{
        console.log('completado')
      }
    });
  }

}
