import { RegistroComponent } from './registro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RegistroComponent   //declaramos el componente
    ],
    imports: [ CommonModule ],
    exports: [
        RegistroComponent  //declaramos el componente.
    ],
    providers: [],
})
export class RegistroModule {}
