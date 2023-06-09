import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LoadEventData, Page, WebView } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'ns-browser',
  templateUrl: 'browser.component.html',
})
export class BrowserComponent implements OnInit {
  url = 'https://www.google.com';
  @ViewChild('urlTextField') urlTextField: ElementRef;

  constructor(private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  onReturnPress() {
    this.url = this.urlTextField.nativeElement.text;
  }

  onLoadFinished(args: LoadEventData) {
    let webView = <WebView>args.object;
    console.log('WebView is loaded. URL: ' + webView.src);
  }
}
