import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ListaproveedorComponent } from './components/proveedor/listaproveedor/listaproveedor.component';
import { PerfilConsultaComponent } from './components/proveedor/perfil-consulta/perfil-consulta.component';
import { ContratoComponent } from './components/proveedor/contrato/contrato.component';


const routes: Routes = [
  {path: '', redirectTo: 'busqueda', pathMatch: 'full'},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'busqueda/filtro', component: ListaproveedorComponent},
  {path: 'filtro/perfil', component: PerfilConsultaComponent},
  {path: 'perfil/contrato', component: ContratoComponent},
  {path: '**', component: BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
