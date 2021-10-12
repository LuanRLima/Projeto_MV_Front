import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component'; 
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { ListaComponent} from './lista/lista.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "colaborador",
  component: FuncionarioCreateComponent
},
{
  path: "lista",
  component: ListaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
