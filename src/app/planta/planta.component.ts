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
  interior: number = 0;
  exterior: number = 0;
  i: number = 0;
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
        if (Array.isArray(this.plantas)){
          let tipos = this.plantas.map(elemento => elemento.tipo);
          console.log(tipos);
          for(let i=0;i<tipos.length;i++){
            if(tipos[i] === 'Exterior'){
              this.exterior = this.exterior + 1
            }
            else{
              this.interior = this.interior + 1
            }
          }
        }
        else{
          console.log("No es array");
        }               
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
