import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario-create/funcionario.model';
import { FuncionarioService } from '../funcionario-create/funcionario.service';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: Funcionario[]
  displayedColumns = ['id', 'name', 'cpf', 'item', 'action']

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.read().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
      
    })
  }

}
