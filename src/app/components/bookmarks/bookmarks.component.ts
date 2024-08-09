import { Component, inject, OnInit } from '@angular/core';
import { BookmarkService } from '~/app/services/bookmark.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-bookmarks',
  templateUrl: 'bookmarks.component.html',
})
export class BookmarksComponent implements OnInit {
  bookmarks: string[];

  private bookmarkService = inject(BookmarkService);
  private router = inject(Router);

  ngOnInit() {
    this.loadBookmarks();
  }

  loadBookmarks() {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

  selectBookmark(url: string) {
    this.router.navigate(['/browser', { url }]);
  }

  removeBookmark(url: string) {
    this.bookmarkService.removeBookmark(url);
    this.loadBookmarks();
  }
}
