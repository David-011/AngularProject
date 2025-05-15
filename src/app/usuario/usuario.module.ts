import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarusuarioComponent } from './listarusuario/listarusuario.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path:'',
    component: ListarusuarioComponent
  }
     
]

@NgModule({
  declarations: [
    ListarusuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UsuarioModule { }
