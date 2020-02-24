import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUhrComponent } from './edit-uhr.component';

describe('EditUhrComponent', () => {
  let component: EditUhrComponent;
  let fixture: ComponentFixture<EditUhrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUhrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
