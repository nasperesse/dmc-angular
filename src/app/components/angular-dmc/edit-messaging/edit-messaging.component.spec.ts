import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMessagingComponent } from './edit-messaging.component';

describe('EditMessagingComponent', () => {
  let component: EditMessagingComponent;
  let fixture: ComponentFixture<EditMessagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMessagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
