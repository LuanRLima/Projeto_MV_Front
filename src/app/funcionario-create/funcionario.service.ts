import { HttpClient } from '@angular/common/http';
import { Injectable, LOCALE_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {


  baseUrl = "http://localhost:3001/funcionario";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.baseUrl, funcionario)
    
  }

  read(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.baseUrl)
  }

  readByID(id: string): Observable<Funcionario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Funcionario>(url)
  }
  update(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.baseUrl}/${funcionario.id}`
    return this.http.put<Funcionario>(url, funcionario)
  }
}
