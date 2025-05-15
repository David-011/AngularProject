import { Component, Input, input } from '@angular/core';
import { usuario } from '../../models/usuario';
import { format } from 'date-fns-tz';

@Component({
  selector: 'app-cu-usuario',
  templateUrl: './cu-usuario.component.html',
  styleUrl: './cu-usuario.component.css'
})
export class CuUsuarioComponent {
  @Input() usuario: usuario | undefined;

  formatDatetimeLocal(fecha: Date){
    let fechaFormateada = format(fecha, "yyyy-MM-dd-'T'HH:mm", {timeZone: "America/Bogota" })
    return fechaFormateada;
  }

  updateFecha(valor:string){
    this.usuario!.fecharegistro = new Date(valor);
  }
}
