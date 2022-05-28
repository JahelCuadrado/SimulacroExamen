import { HomeModule } from './home/home.module';
import { RegistroModule } from './registro/registro.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
  ],
    imports: [
      LoginModule,
      RegistroModule,
      HomeModule
     ],
    exports: [
      LoginModule,
      RegistroModule,
      HomeModule
    ],
    providers: [],
})
export class PagesModule {}
