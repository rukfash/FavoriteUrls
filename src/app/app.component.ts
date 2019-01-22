import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks: any[] = [
    
    {path: 'item-list', label: "Home"},
    {path: 'item-add', label: "New Bookmark"},
    {path: 'item-broken', label: "Broken Bookmarks"}
    
  ]
  title = 'Bookmarks';
}
