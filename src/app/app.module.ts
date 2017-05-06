import {BrowserModule, SafeHtml} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {SandboxComponent} from "./sandbox.component";
import {PositionComponent} from "./position.component";
import {Safe} from "./safehtml.pipe";
import {DisplayComponent} from "./display.component";
import {PseudoComponent} from "./pseudo.component";
import {AlignmentComponent} from "./alignment.component";
import {VisibilityComponent} from "./visibility.component";
import {ExamplesComponent} from "./examples.component";

const routes:any[] = [
  {
    path: 'position', component: PositionComponent
  },
  {
    path: 'display', component: DisplayComponent
  },
  {
    path: 'pseudo', component: PseudoComponent
  },
  {
    path: 'alignment', component: AlignmentComponent
  },
  {
    path: 'visibility', component: VisibilityComponent
  },
  {
    path: 'examples', component: ExamplesComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    PositionComponent,
    DisplayComponent,
    PseudoComponent,
    AlignmentComponent,
    VisibilityComponent,
    ExamplesComponent,
    Safe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [Safe],
  bootstrap: [AppComponent]
})
export class AppModule { }
