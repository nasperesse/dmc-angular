import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmcComponent } from './dmc/dmc.component';
import {EditUhrComponent} from './edit-uhr/edit-uhr.component';
import {UhrCompComponent} from './uhr-comp/uhr-comp.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { ListCompComponent } from './list-comp/list-comp.component';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [DmcComponent, EditUhrComponent, UhrCompComponent, ListCompComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    EditUhrComponent,
    UhrCompComponent,
    ListCompComponent
  ]
})
export class AngularDmcModule {

}
