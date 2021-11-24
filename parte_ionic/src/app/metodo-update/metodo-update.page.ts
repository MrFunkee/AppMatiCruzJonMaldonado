import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-metodo-update',
  templateUrl: './metodo-update.page.html',
  styleUrls: ['./metodo-update.page.scss'],
})
export class MetodoUPDATEPage implements OnInit {

  cadenaACTUALIZAR= {
    "correo":"aID4@prueba1.org",
    "contrasena":"cccc"
  };


  constructor(private servicio: UsuariosService) { }

  actualizaUsuario(){
    this.servicio.actualizarUsuario(4, this.cadenaACTUALIZAR).subscribe((datos) => {
      console.log(datos);
    });
  }

  ngOnInit() {
  }

}
