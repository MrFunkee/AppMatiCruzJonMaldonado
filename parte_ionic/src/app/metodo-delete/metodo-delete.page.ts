import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-metodo-delete',
  templateUrl: './metodo-delete.page.html',
  styleUrls: ['./metodo-delete.page.scss'],
})
export class MetodoDELETEPage implements OnInit {

  constructor(private servicio: UsuariosService) { }

  borraUsuario(){
    this.servicio.borrarUsuario(4).subscribe((datos) => {
      console.log(datos);
    })
  }

  ngOnInit() {
  }

}
