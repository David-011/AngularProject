import { Component } from '@angular/core';
import { usuario } from '../../models/usuario';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrl: './listarusuario.component.css'
})
export class ListarusuarioComponent {
  VectorUsuario: usuario[]= [
    {id: 1, nombre: "David", fecharegistro: new Date()},
    {id: 2, nombre: "Mateo", fecharegistro: new Date()}
  ];

  usuarioSelecciona:usuario | undefined = undefined;

  EditarUsuario(usuario:usuario){
    console.log(usuario);
  }
}
