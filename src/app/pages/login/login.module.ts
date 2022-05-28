import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent   //declaramos el componente
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
        LoginComponent  //declaramos el componente.
    ],
    providers: [],
})
export class LoginModule {}
