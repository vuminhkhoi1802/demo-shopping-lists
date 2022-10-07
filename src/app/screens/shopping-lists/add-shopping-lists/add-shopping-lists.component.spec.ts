import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingListsComponent } from './add-shopping-lists.component';

describe('AddShoppingListsComponent', () => {
  let component: AddShoppingListsComponent;
  let fixture: ComponentFixture<AddShoppingListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShoppingListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShoppingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
