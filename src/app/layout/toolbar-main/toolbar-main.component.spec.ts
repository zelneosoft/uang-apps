import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMainComponent } from './toolbar-main.component';

describe('ToolbarMainComponent', () => {
  let component: ToolbarMainComponent;
  let fixture: ComponentFixture<ToolbarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
