import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { DmcComponent } from './dmc/dmc.component';
import {EditUhrComponent} from './edit-uhr/edit-uhr.component';
import {UhrCompComponent} from './uhr-comp/uhr-comp.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { ListCompComponent } from './list-comp/list-comp.component';
import {RouterModule} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MessagingCompComponent } from './messaging-comp/messaging-comp.component';
import { EditMessagingComponent, NgbdModalContentComponent } from './edit-messaging/edit-messaging.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    DmcComponent,
    EditUhrComponent,
    UhrCompComponent,
    ListCompComponent,
    MessagingCompComponent,
    EditMessagingComponent,
    NgbdModalContentComponent
  ],
  imports: [
  CommonModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule,
   ],
  exports: [
    EditUhrComponent,
    UhrCompComponent,
    ListCompComponent,
    UhrCompComponent,
    MessagingCompComponent

  ],
  providers: []
})
export class AngularDmcModule {

}
