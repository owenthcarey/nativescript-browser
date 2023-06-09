import { Component, ViewChild, ElementRef } from '@angular/core';
import { WebView, LoadEventData } from '@nativescript/core';
import { TextField } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'ns-browser',
  templateUrl: 'browser.component.html'
})
export class BrowserComponent {
  public url: string = 'https://www.google.com';
  @ViewChild('urlField') urlField: ElementRef;

  browse() {
    this.url = this.urlField.nativeElement.text;
  }

  onTextChanged(args) {
    let textField = <TextField>args.object;
    this.url = textField.text;
  }

  onWebViewLoaded(args: LoadEventData) {
    let webView = <WebView>args.object;
    console.log("WebView is loaded. URL: " + webView.src);
  }
}
