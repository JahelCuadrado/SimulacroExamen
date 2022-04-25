import { RegistroModule } from './registro/registro.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';

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
