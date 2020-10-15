import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
menu:any[] = [

  {
    tituloPadre:'Tablero',
    icono:'mdi mdi-gauge',
    hijos :[
      {
        titulo :'Main',
        url:'/'
      },
      {
        titulo :'ProgressBar',
        url:'progress'
      },
      {
        titulo :'Grafica',
        url:'grafica1'
      }
    ]
  }



]
  constructor() { }
}
