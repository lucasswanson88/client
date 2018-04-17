import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerService } from './Services/trainer.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TrainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
