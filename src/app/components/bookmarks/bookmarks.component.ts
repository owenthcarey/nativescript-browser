import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '~/app/services/bookmark.service';

@Component({
  selector: 'ns-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {
  bookmarks: string[];

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.loadBookmarks();
  }

  loadBookmarks() {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

  removeBookmark(url: string) {
    this.bookmarkService.removeBookmark(url);
    this.loadBookmarks();
  }
}
