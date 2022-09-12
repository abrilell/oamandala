import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component/app.component';
import { OaHomeComponent } from './components/oa-home/oa-home.component';
import { OaSvgShapeComponent } from './components/oa-svg-shape/oa-svg-shape.component';

@NgModule({
  declarations: [AppComponent, OaHomeComponent, OaSvgShapeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
