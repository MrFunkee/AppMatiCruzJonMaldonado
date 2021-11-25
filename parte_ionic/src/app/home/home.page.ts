import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor( private actRoute: ActivatedRoute) {  }
  
  ngOnInit(){
    this.actRoute.params.subscribe((params) =>{
      this.revisarLocalStorage();
    })
  }
  
  correoConectado = ''
  revisarLocalStorage(){
    if(localStorage.getItem('correo')){
      this.correoConectado = "Conectado como: " + localStorage.getItem('correo');
    }
  }


}
