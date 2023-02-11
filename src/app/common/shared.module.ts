import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule { }