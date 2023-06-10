import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LoadEventData, Page, WebView } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'ns-browser',
  templateUrl: 'browser.component.html',
})
export class BrowserComponent implements OnInit {
  url = 'https://google.com';
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
    this.urlTextFieldRef.nativeElement.text = args.url;
    console.log('WebView is loaded. URL: ' + args.url);
  }
}
