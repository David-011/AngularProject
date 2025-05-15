import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarusuarioComponent } from './listarusuario/listarusuario.component';
import { RouterModule, Routes } from '@angular/router';
import { CuUsuarioComponent } from './cu-usuario/cu-usuario.component';

const ROUTES: Routes = [
  {
    path:'',
    component: ListarusuarioComponent
  }
     
]

@NgModule({
  declarations: [
    ListarusuarioComponent,
    CuUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UsuarioModule { }
