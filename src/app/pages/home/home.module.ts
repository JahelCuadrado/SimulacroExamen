import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HomeComponent   //declaramos el componente
    ],
    imports: [ CommonModule ],
    exports: [
        HomeComponent  //declaramos el componente.
    ],
    providers: [],
})
export class HomeModule {}
