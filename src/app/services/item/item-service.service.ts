import { Injectable } from '@angular/core';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Url } from '../../models/url';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {

  }

  //add url to local storage
  public add(url: Url) {

    var values = JSON.parse(localStorage.getItem("myUrls")) || [];
    values.push(url);

    localStorage.setItem("myUrls", JSON.stringify(values));

  }


  //delete from local storage and update object
  public delete(url: string) {

    var values = JSON.parse(localStorage.getItem("myUrls")) || [];
    var found = values.find(x => x.url == url);

    var index: number = values.indexOf(found);

    if (index !== -1) {
      values.splice(index, 1);
    }

    localStorage.setItem("myUrls", JSON.stringify(values));
  }

  //get items from local storage as array sorted by date time
  public getItems() {

    var result = JSON.parse(localStorage.getItem("myUrls")) || [];
    result.sort((a, b) => new Date(b.lastVisited).getTime() - new Date(a.lastVisited).getTime());
    return result;
  }

  //update visited url
  public visitUrl(url: string) {

    var values = JSON.parse(localStorage.getItem("myUrls")) || [];
    var found = values.find(x => x.url == url) as Url;

    var index: number = values.indexOf(found);
    values[index].lastVisited = new Date().toLocaleString();

    localStorage.setItem("myUrls", JSON.stringify(values));

    return;
  }


  //check if url is valid
  public isValidUrl(url:string) {
    var regexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    return regexp.test(url);
 }

}
