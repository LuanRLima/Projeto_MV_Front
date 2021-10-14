import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario-create/funcionario.model';
import { FuncionarioService } from '../funcionario-create/funcionario.service';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css']
})
export class FuncionarioDeleteComponent implements OnInit {
  funcionario: Funcionario
  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.funcionarioService.readByID(1).subscribe((funcionario) => {
      this.funcionario = this.funcionario;
    });
  }

  deleteFuncionario(): void {
    this.funcionarioService.delete(1).subscribe(() => {
      this.funcionarioService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/funcionarios"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/funcionarios"]);
  }
}

