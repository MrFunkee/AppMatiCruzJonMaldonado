import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

//formularios del video (link en appmodules)
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-metodo-post',
  templateUrl: './metodo-post.page.html',
  styleUrls: ['./metodo-post.page.scss'],
})
export class MetodoPOSTPage implements OnInit {

  loginForm = new FormGroup({
    correo : new FormControl('', Validators.required),
    contrasena : new FormControl('', Validators.required)
  })

  constructor(private servicio: UsuariosService) { }

  errorVerificacion: Boolean = false;
  mensajeError: any = "holi"

  postUsuario(formulario){
    formulario['tipo'] = 'crear'
    this.servicio.postearUsuario(formulario).subscribe((datos) => {
      this.errorVerificacion = true;
      this.mensajeError = "Usuario creado correctamente"
      console.log(datos);
    });
  }
  
  

  ngOnInit() {
  }

}
