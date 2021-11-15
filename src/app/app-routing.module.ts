import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule)
  },

  {
    path: 'pag-pri',
    loadChildren: () => import('./page/pag-pri/pag-pri.module').then( m => m.PagPriPageModule)
  },
  
  {
    path: 'recuperar',
    loadChildren: () => import('./page/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule)
  },

  {
    path: 'pag-qr',
    loadChildren: () => import('./page/pag-qr/pag-qr.module').then( m => m.PagQrPageModule)
  },
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
