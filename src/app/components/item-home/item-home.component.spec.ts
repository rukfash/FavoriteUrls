import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHomeComponent } from './item-home.component';

describe('ItemhomeComponent', () => {
  let component: ItemHomeComponent;
  let fixture: ComponentFixture<ItemHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
