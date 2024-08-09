import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { BrowserComponent } from '~/app/components/browser/browser.component';
import {
  BookmarksComponent
} from '~/app/components/bookmarks/bookmarks.component';

const routes: Routes = [
  { path: '', redirectTo: '/browser', pathMatch: 'full' },
  { path: 'browser', component: BrowserComponent },
  { path: 'browser/:url', component: BrowserComponent },
  { path: 'bookmarks', component: BookmarksComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
