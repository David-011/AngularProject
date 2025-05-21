import { Component, ElementRef, ViewChild } from '@angular/core';
import { usuario } from '../../models/usuario';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrl: './listarusuario.component.css'
})
export class ListarusuarioComponent {

@ViewChild('modalusuario') modal: ElementRef | undefined;


  VectorUsuario: usuario[]= [
    {id: 1, nombre: "David", fecharegistro: new Date()},
    {id: 2, nombre: "Mateo", fecharegistro: new Date()}
  ];

  usuarioSelecciona:usuario | undefined = undefined;
  isNew:Boolean = false;

  EditarUsuario(usuario:usuario){
    this.isNew = false;
    this.usuarioSelecciona = usuario;
  }
  
  NuevoUsuario(){
    this.isNew = true;
    this.usuarioSelecciona = { id:0, fecharegistro: new Date(), nombre: "" };
  }
  
  GuardarUsuario(){
    if (this.isNew){
      this.VectorUsuario.push(this.usuarioSelecciona!); //equivalente llamar una API
      this.usuarioSelecciona = undefined;
      this.CerrarModal(this.modal)
    }else{
      //Llamada a la API por PUT
      this.usuarioSelecciona = undefined;
      this.CerrarModal(this.modal)
    }
    Swal.fire({title:'Cambios guardados correctamente', icon:'success'})

  }
  EliminarUsuario(us:usuario) {
    Swal.fire(
      {
        icon: 'question',
        title: `¿Está seguro de elminar el usuario '${us.nombre}'?`,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: 'No, conservar',
        confirmButtonText: 'Si, eliminar',
        allowOutsideClick: false,
        buttonsStyling: false,
        reverseButtons: true,


        customClass: {
          cancelButton:'btn btn-secondary me-1',
          confirmButton: 'btn btn-danger'
        }
      }
    )
    .then(rs =>{
      if(rs.isConfirmed){
//llamada api DELETE
        
        Swal.fire({
          title: 'usuario eliminado correctamente',
          icon: 'success'
        })
      }
        
    });
  }

  CerrarModal(modal: ElementRef | undefined){
    if(modal){
      let bsModal = Modal.getInstance(modal?.nativeElement)
      bsModal?.hide();

      let backdrop = document.querySelector(".modal-backdrop.fade.show");
      if(backdrop){
        backdrop.parentNode?.removeChild(backdrop);
      }
      document.body.removeAttribute('style');
      document.body.removeAttribute('class');
    }
  }
}
