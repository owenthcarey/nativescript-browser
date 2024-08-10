import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  inject
} from '@angular/core';
import { isAndroid, LoadEventData, Page, WebView } from '@nativescript/core';
import { BookmarkService } from '~/app/services/bookmark.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-browser',
  templateUrl: 'browser.component.html',
})
export class BrowserComponent implements OnInit {
  backwardArrowSrc = isAndroid ? '' : 'res://ArrowBackward';
  forwardArrowSrc = isAndroid ? '' : 'res://ArrowForward';

  url = 'https://google.com/';
  @ViewChild('urlTextFieldRef') urlTextFieldRef: ElementRef;
  @ViewChild('webViewRef') webViewRef: ElementRef;

  bookmarkService = inject(BookmarkService);
  private page = inject(Page);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.route.params.subscribe(params => {
      if (params['url']) {
        this.url = params['url'];
      }
    });
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
    this.url = args.url;
  }

  onBookmark() {
    this.bookmarkService.toggleBookmark(this.url);
  }
}
