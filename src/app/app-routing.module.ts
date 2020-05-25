import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUhrComponent } from './components/angular-dmc/edit-uhr/edit-uhr.component';
import {DmcComponent} from './components/angular-dmc/dmc/dmc.component';
import {ListCompComponent} from './components/angular-dmc/list-comp/list-comp.component';
import { MessagingCompComponent } from './components/angular-dmc/messaging-comp/messaging-comp.component';
import { EditMessagingComponent } from './components/angular-dmc/edit-messaging/edit-messaging.component';


const routes: Routes = [
                          { path: '',
                            component: DmcComponent,
                            children: [
                              {
                                path: '',
                                component: ListCompComponent
                              },
                              {
                                path: 'edit-uhr',
                                component: EditUhrComponent
                              },
                              {
                                path: 'edit-chat',
                                component: EditMessagingComponent
                              },
                              {
                                path: 'test',
                                component: MessagingCompComponent,
                                data: {apikey: 'Z4NZ7T5-AAE4H9V-GW1FPR3-PAQCP7W'}
                              },
                              {
                                path: 'chat/:apikey',
                                component: MessagingCompComponent
                              }
                            ]
                          }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
