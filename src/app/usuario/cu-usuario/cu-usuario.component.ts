import { Component, Input, input } from '@angular/core';
import { usuario } from '../../models/usuario';

@Component({
  selector: 'app-cu-usuario',
  templateUrl: './cu-usuario.component.html',
  styleUrl: './cu-usuario.component.css'
})
export class CuUsuarioComponent {
  @Input() usuario: usuario | undefined;

}
