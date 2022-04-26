import { RegistroComponent } from './registro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RegistroComponent   //declaramos el componente
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
     ],
    exports: [
        RegistroComponent  //declaramos el componente.
    ],
    providers: [],
})
export class RegistroModule {}
