import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Url } from '../../models/url';
import { ItemService } from '../../services/item/item-service.service';
import {Router } from '@angular/router'


@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css'],
  
})


export class ItemAddComponent implements OnInit {

  //create form and url object to store data
  urlForm: FormGroup;
  url: Url = new Url("","");

  constructor(private fb: FormBuilder, private itemService: ItemService, private router: Router) { 
      
  }

  ngOnInit() {    

    //initialize form
    this.urlForm = this.fb.group({
      url: "",
      name: "",
      description: "",
      lastVisited: null
    })

  }

  //update last visited property, check for http prefix and add to locale storage
  onSubmitUrlForm(formData){
    
    formData.lastVisited = new Date().toLocaleString();
    formData.url = addhttp(formData.url);
    this.url = formData;
    
    this.itemService.add(this.url);
    this.router.navigateByUrl('/item-list');
  } 
}

//adding http prefix for correct url
function addhttp(url) {
  if (!/^(f|ht)tps?:\/\//i.test(url)) {
     url = "http://" + url;
  }
  return url;
}
