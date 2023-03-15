import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';              
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeScanComponent } from './code-scan/code-scan.component';
import { PathFinderComponent } from './path-finder/path-finder.component';
import { QsbComponent } from './qsb/qsb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CodeScanComponent,
    PathFinderComponent,
    QsbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'code-scan', component: CodeScanComponent},
      {path: 'path-finder', component: PathFinderComponent},
      {path: 'qsb', component: QsbComponent},
      {path: '', redirectTo: '/code-scan', pathMatch: 'full'},
      {path: '**', component: CodeScanComponent}
    ]),                   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
