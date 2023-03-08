import { Usuario } from './../pagina-usuario/pagina-usuario.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginaUsuarioComponent } from '../pagina-usuario/pagina-usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  arrayUsuario: Usuario[] = [];
  usuarioNoExiste = false;
  paginaTablas: PaginaUsuarioComponent = new PaginaUsuarioComponent(
    this.httpClient,
    this.route
  );
  constructor(public httpClient: HttpClient, public route: Router) {}
  ngOnInit(): void {
    this.rellenarArray()
  }
  logearse(usuario: HTMLInputElement) {
    this.arrayUsuario.forEach((element) => {
      if (element.username == usuario.value) {
        sessionStorage.setItem('Usuario', usuario.value);
        this.route.navigateByUrl('/tablas');
      } else {
        this.usuarioNoExiste = true;
      }
    });
  }
  rellenarArray(){
    this.httpClient
      .get<Usuario[]>('http://localhost:3000/users')
      .subscribe((res: Usuario[]) => {
        this.arrayUsuario = res;
      });
  }
}
