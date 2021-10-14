import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaComponent } from './lista/lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './navbar/nav.component'
import { HomeComponent } from './view/home/home.component';
import { MatCardModule } from  '@angular/material/card';
import { BlueDirective } from './directives/blue.directive';
import { ForDirective } from './directives/for.directive';
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FuncionarioReadComponent } from './funcionario-read/funcionario-read.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FuncionariocrudComponent } from './view/funcionariocrud/funcionariocrud.component';
import { FuncionarioUpdateComponent } from './funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './funcionario-delete/funcionario-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaComponent,
    NavComponent,
    HomeComponent,
    BlueDirective,
    ForDirective,
    FuncionarioCreateComponent,
    FuncionarioReadComponent,
    FuncionariocrudComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
