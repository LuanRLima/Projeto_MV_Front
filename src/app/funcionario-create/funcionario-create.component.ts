import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from './funcionario.model';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario = {
    name: "Luan",
    cpf: "09715406408",
    listaItem: [
      { name: "coxinha"}
    ] 

  };


  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
  }

  createFuncionario(): void{
    this.funcionarioService.create(this.funcionario).subscribe(() => {
      this.funcionarioService.showMessage('Funcionário e item salvo!')
      this.router.navigate(['/lista'])
    })
  }
  cancel(): void {
    this.router.navigate(['/colaborador'])
    this.funcionarioService.showMessage('Funcionario cancelado')
  }
    
}
