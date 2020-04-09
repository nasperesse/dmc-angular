import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import { from } from 'rxjs';
import {UhrCompComponent} from './components/angular-dmc/uhr-comp/uhr-comp.component';
import {AngularDmcModule} from './components/angular-dmc/angular-dmc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularDmcModule
  ],
  entryComponents: [UhrCompComponent],
  providers: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const uhr = createCustomElement(UhrCompComponent, {injector});
    customElements.define('uhr-comp', uhr);
  }

  ngDoBootstrap() {}
}
