import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingCompComponent } from './messaging-comp.component';

describe('MessagingCompComponent', () => {
  let component: MessagingCompComponent;
  let fixture: ComponentFixture<MessagingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
