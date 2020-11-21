import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmDeleteAllComponent } from './dialog-confirm-delete-all.component';

describe('DialogConfirmDeleteAllComponent', () => {
  let component: DialogConfirmDeleteAllComponent;
  let fixture: ComponentFixture<DialogConfirmDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
