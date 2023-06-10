import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { WebView, LoadEventData } from '@nativescript/core';
import { TextField } from '@nativescript/core';
import { Page } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'ns-browser',
  templateUrl: 'browser.component.html',
})
export class BrowserComponent implements OnInit {
  url = 'https://www.google.com';
  @ViewChild('urlTextFieldRef') urlTextFieldRef: ElementRef;
  @ViewChild('webViewRef') webViewRef: ElementRef;

  constructor(private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  onReturnPress() {
    this.url = this.urlTextFieldRef.nativeElement.text;
  }

  onGoBack() {
    const webView: WebView = this.webViewRef.nativeElement;
    if (webView.canGoBack) {
      webView.goBack();
    }
  }

  onGoForward() {
    const webView: WebView = this.webViewRef.nativeElement;
    if (webView.canGoForward) {
      webView.goForward();
    }
  }

  onWebViewLoadFinished(args: LoadEventData) {
    let webView = <WebView>args.object;
    console.log('WebView is loaded. URL: ' + webView.src);
  }
}
