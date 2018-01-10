import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArtsenComponent } from './artsen/artsen.component'
import { ArtsDetailComponent } from './arts-detail/arts-detail.component';


const routes: Routes = [
  { path: '', component: ArtsenComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'detail/:id', component: ArtsDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]

})
export class AppRoutingModule { 
  
}


