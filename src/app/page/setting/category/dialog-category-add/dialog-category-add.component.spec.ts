import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCategoryAddComponent } from './dialog-category-add.component';

describe('DialogCategoryAddComponent', () => {
  let component: DialogCategoryAddComponent;
  let fixture: ComponentFixture<DialogCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCategoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
