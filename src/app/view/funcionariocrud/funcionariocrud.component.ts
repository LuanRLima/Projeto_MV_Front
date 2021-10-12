import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionariocrud',
  templateUrl: './funcionariocrud.component.html',
  styleUrls: ['./funcionariocrud.component.css']
})
export class FuncionariocrudComponent implements OnInit {

  constructor(private router: Router, ) {}
    

  ngOnInit(): void {
  }

  navigateToFuncionarioCreate(): void {
    this.router.navigate(['/colaborador/create'])
  }

}
