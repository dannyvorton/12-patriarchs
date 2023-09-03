import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JacobComponent } from './jacob/jacob.component';
import { RachelComponent } from './rachel/rachel.component';
import { LeahComponent } from './leah/leah.component';
import { JosephComponent } from './joseph/joseph.component';
import { BenjaminComponent } from './benjamin/benjamin.component';
import { BilhahComponent } from './bilhah/bilhah.component';
import { ZilpahComponent } from './zilpah/zilpah.component';
import { AsherComponent } from './asher/asher.component';
import { DanComponent } from './dan/dan.component';
import { GadComponent } from './gad/gad.component';
import { IssacharComponent } from './issachar/issachar.component';
import { JudahComponent } from './judah/judah.component';
import { LeviComponent } from './levi/levi.component';
import { NaphtaliComponent } from './naphtali/naphtali.component';
import { ReubenComponent } from './reuben/reuben.component';
import { SimeonComponent } from './simeon/simeon.component';
import { ZebulunComponent } from './zebulun/zebulun.component';
import { DinahComponent } from './dinah/dinah.component';

@NgModule({
  declarations: [
    AppComponent,
    JacobComponent,
    RachelComponent,
    LeahComponent,
    JosephComponent,
    BenjaminComponent,
    BilhahComponent,
    ZilpahComponent,
    AsherComponent,
    DanComponent,
    GadComponent,
    IssacharComponent,
    JudahComponent,
    LeviComponent,
    NaphtaliComponent,
    ReubenComponent,
    SimeonComponent,
    ZebulunComponent,
    DinahComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
