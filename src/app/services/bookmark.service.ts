import { Injectable } from '@angular/core';
import { ApplicationSettings } from '@nativescript/core';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private readonly bookmarksKey = 'bookmarks';

  getBookmarks(): string[] {
    return JSON.parse(ApplicationSettings.getString(this.bookmarksKey, '[]'));
  }

  addBookmark(url: string) {
    const bookmarks = this.getBookmarks();
    if (!bookmarks.includes(url)) {
      bookmarks.push(url);
      this.saveBookmarks(bookmarks);
    }
  }

  removeBookmark(url: string) {
    let bookmarks = this.getBookmarks();
    bookmarks = bookmarks.filter(bookmark => bookmark !== url);
    this.saveBookmarks(bookmarks);
  }

  toggleBookmark(url: string) {
    if (this.isBookmark(url)) {
      this.removeBookmark(url);
    } else {
      this.addBookmark(url);
    }
  }

  isBookmark(url: string): boolean {
    return this.getBookmarks().includes(url);
  }

  private saveBookmarks(bookmarks: string[]) {
    ApplicationSettings.setString(this.bookmarksKey, JSON.stringify(bookmarks));
  }
}
