import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OaHomeComponent } from './components/oa-home/oa-home.component';

const routes: Routes = [{ path: '', component: OaHomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
