import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../funcionario-create/funcionario.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  constructor(
    private funcionarioService: FuncionarioService,
    router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.ro
    
  }

}
