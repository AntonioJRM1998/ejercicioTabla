import { MatTableModule } from '@angular/material/table';
import { PublicModule } from './public/public.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
