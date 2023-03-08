import { PublicRoutingModule } from './public-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent, PaginaUsuarioComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    PublicRoutingModule,
  ],
})
export class PublicModule {}
