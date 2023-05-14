import { Component } from '@angular/core';

import { BdLocalService } from '../services/bd-local.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre:string;
  nro:string;
  constructor(public bdlocalservice: BdLocalService) {}
  guardar(){
    this.bdlocalservice.guardarContacto(this.nombre,this.nro)
  }

}
