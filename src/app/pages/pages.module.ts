import { RegistroModule } from './registro/registro.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
    declarations: [
  ],
    imports: [
      LoginModule,
      RegistroModule
     ],
    exports: [
      LoginModule,
      RegistroModule
    ],
    providers: [],
})
export class PagesModule {}
