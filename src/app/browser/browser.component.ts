import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { isAndroid, LoadEventData, Page, WebView } from '@nativescript/core';
import { BookmarkService } from '~/app/services/bookmark.service';

@Component({
  selector: 'ns-browser',
  templateUrl: 'browser.component.html',
})
export class BrowserComponent implements OnInit {
  backwardArrowSrc = isAndroid ? '' : 'res://ArrowBackward';
  forwardArrowSrc = isAndroid ? '' : 'res://ArrowForward';

  url = 'https://youtube.com';
  @ViewChild('urlTextFieldRef') urlTextFieldRef: ElementRef;
  @ViewChild('webViewRef') webViewRef: ElementRef;

  constructor(private page: Page, public bookmarkService: BookmarkService) {}

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

  onLoadFinished(args: LoadEventData) {
    this.urlTextFieldRef.nativeElement.text = args.url;
  }

  onBookmark() {
    this.bookmarkService.toggleBookmark(this.url);
  }
}
