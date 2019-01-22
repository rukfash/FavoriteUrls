import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBrokenComponent } from './item-broken.component';

describe('ItemBrokenComponent', () => {
  let component: ItemBrokenComponent;
  let fixture: ComponentFixture<ItemBrokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBrokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBrokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
