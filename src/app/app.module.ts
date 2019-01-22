import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ItemBrokenComponent } from './components/item-broken/item-broken.component';
import { ItemHomeComponent } from './components/item-home/item-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule}  from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 

const ROUTES: Route[] = [  
  
  { path: 'item-home', component: ItemHomeComponent },
  { path: 'item-list', component: ItemListComponent },
  { path: 'item-add', component: ItemAddComponent },
  { path: 'item-broken', component: ItemBrokenComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemAddComponent,
    ItemBrokenComponent,
    ItemHomeComponent
    
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatSortModule,
    HttpClientModule
    
   
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
