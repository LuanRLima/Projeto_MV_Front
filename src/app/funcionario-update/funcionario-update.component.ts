import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario-create/funcionario.model';
import { FuncionarioService } from '../funcionario-create/funcionario.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {
  funcionario: Funcionario
  router: any;
  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id =  this.route.snapshot.paramMap.get('id');
    this.funcionarioService.readByID(1).subscribe(funcionario => {
      this.funcionario = funcionario
    }
    );
  
    
  }

  updateFuncionario(): void{
    this.funcionarioService.update(this.funcionario).subscribe(() => {
      this.funcionarioService.showMessage("Funcionario atualizado sucesso")
      this.router.navigate(["/colaborador"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/colaborador"])
  }

}
