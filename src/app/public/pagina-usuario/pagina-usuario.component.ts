import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Usuario {
  id: number;
  username: string;
  pedido: string;
  fecha: string;
}
@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.scss'],
})
export class PaginaUsuarioComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'Nombre', 'Pedido', 'Fecha'];
  input: number | undefined;
  ELEMENT_DATA: Usuario[] = [];
  dataSource = new MatTableDataSource();
  usuario = sessionStorage.getItem('Usuario');
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public httpClient: HttpClient, private route: Router) {
    if(!this.controlarUsuario()){
      route.navigate(['/'])
    }else{
    }
    this.paginator = {} as MatPaginator;
  }
  ngOnInit(): void {
    this.rellenarTabla();
  }
  rellenarTabla() {
    this.httpClient
      .get<Usuario[]>('http://localhost:3000/users')
      .subscribe((res: Usuario[]) => {
        this.ELEMENT_DATA = res;
        this.dataSource.data=this.filtrar(this.ELEMENT_DATA);
      });
  }
  filtrar(elementos: Usuario[]) {
    elementos = this.ELEMENT_DATA.filter(
      (usuario) => usuario.username == this.usuario
    );
    return elementos;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  volverAlLogin() {
    sessionStorage.removeItem('Usuario');
    this.route.navigateByUrl('/');
  }
  controlarUsuario(){
    let usuario:boolean;
    if(sessionStorage.getItem('Usuario')){
      usuario= true
    }else{
      usuario= false
    }
    return usuario;
  }
}
