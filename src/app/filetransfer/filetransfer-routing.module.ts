import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiletransferComponent } from './filetransfer.component';


const routes: Routes = [
  {
    path: '',
    component: FiletransferComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FiletransferRoutingModule { }
