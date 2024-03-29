import { FuncionarioUpdateComponent } from './funcionario-update/funcionario-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component'; 
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { ListaComponent} from './lista/lista.component';
import { FuncionariocrudComponent } from './view/funcionariocrud/funcionariocrud.component';
import { FuncionarioDeleteComponent } from './funcionario-delete/funcionario-delete.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "colaborador",
  component: FuncionariocrudComponent
},
{
  path: "colaborador/create",
    component: FuncionarioCreateComponent
},
{
  path: "colaborador/update/:id",
    component: FuncionarioUpdateComponent
},
{
  path: "colaborador/delete/:id",
    component: FuncionarioDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
