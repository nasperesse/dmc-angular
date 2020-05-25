import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import {UhrCompComponent} from './components/angular-dmc/uhr-comp/uhr-comp.component';
import {AngularDmcModule} from './components/angular-dmc/angular-dmc.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagingCompComponent } from './components/angular-dmc/messaging-comp/messaging-comp.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularDmcModule,
    BrowserAnimationsModule
    ],
  entryComponents: [UhrCompComponent, MessagingCompComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const uhr = createCustomElement(UhrCompComponent, {injector});
    customElements.define('angular-uhr-comp', uhr);
    const chat = createCustomElement(MessagingCompComponent, {injector});
    customElements.define('angular-chat-comp', chat);

  }

  ngDoBootstrap() {}
}
