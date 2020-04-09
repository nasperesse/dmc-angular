import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUhrComponent } from './components/angular-dmc/edit-uhr/edit-uhr.component';
import { AppComponent } from './app.component';
import {DmcComponent} from './components/angular-dmc/dmc/dmc.component';
import {ListCompComponent} from './components/angular-dmc/list-comp/list-comp.component';


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
                              }
                            ]
                          }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
