import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUhrComponent } from './edit-uhr/edit-uhr.component';
import { AppComponent } from './app.component';


const routes: Routes = [{path: 'edit-uhr', component: EditUhrComponent},
                        {path: '', component: AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
