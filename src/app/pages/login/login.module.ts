import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent   //declaramos el componente
    ],
    imports: [ CommonModule ],
    exports: [
        LoginComponent  //declaramos el componente.
    ],
    providers: [],
})
export class LoginModule {}
