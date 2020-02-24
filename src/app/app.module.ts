import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UhrCompComponent } from './uhr-comp/uhr-comp.component';
import { EditUhrComponent } from './edit-uhr/edit-uhr.component';
import {createCustomElement} from '@angular/elements';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UhrCompComponent,
    EditUhrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [UhrCompComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(UhrCompComponent, {injector: this.injector});
    customElements.define('uhr-comp', customElement);
  }
}
