import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import {BrowserComponent} from "~/app/browser/browser.component";

const routes: Routes = [
  { path: '', redirectTo: '/browser', pathMatch: 'full' },
  { path: 'browser', component: BrowserComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
