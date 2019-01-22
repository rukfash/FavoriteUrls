import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Url } from '../../models/url';
import { MatPaginator, MatTableDataSource, MatSort, Sort } from '@angular/material';
import { ItemService } from '../../services/item/item-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  dataSource = new MatTableDataSource<Url>();
  displayedColumns: string[] = ['url', 'name', 'description', 'lastvisited', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() broken: boolean = false;
  isTesting: boolean = false;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {

    //if we component is to be used to display all urls then set datasource
    //otherwise it means that it is being used for testing broken urls which 
    //is triggered on button click

    if (!this.broken)
      this.setDataSource();

  }

  //confirm and delete from local storage
  public delete(url: string) {

    if (confirm("Are you sure to delete " + url)) {
      this.itemService.delete(url);
      this.setDataSource();
    }
  }

  //visit url, update local storage and open in new window, reset datasource since last visited has changed
  public visitUrl(url: string) {

    this.itemService.visitUrl(url);
    window.open(url);
    this.setDataSource();

  }

  //used for testing broken urls. Url is considered broken if it doesn't pass REGEX validation
  public testBrokenUrls() {
    this.isTesting = true;

    //method finishes fast, so timeout is set to show that button is disabled while testing
    setTimeout(() => {
      var urls = this.itemService.getItems();
      var brokenUrls: Url[] = [];

      if (this.broken) {
        for (var i = 0; i < urls.length; i++) {

          if (!this.itemService.isValidUrl(urls[i].url)) {
            brokenUrls.push(urls[i]);
          }
        }
      }

      this.setDataSource(brokenUrls);
      this.isTesting = false;
    }, 2000);
  }


  //used to set or update datasource
  private setDataSource(urls: Url[] = null) {

    if (!urls)
      urls = this.itemService.getItems();

    this.dataSource = new MatTableDataSource<Url>(urls);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  //sorting by columns
  sortData(sort: Sort) {
    var urls = this.itemService.getItems();
    const data = urls.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource = data;
      return;
    }

    this.dataSource = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'url': return compare(a.url, b.url, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'visitedDate': return compare(a.visitedDate, b.visitedDate, isAsc);
        default: return 0;
      }
    });
  }
}

//comparing function for sorting
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
