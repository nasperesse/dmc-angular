import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UhrCompComponent } from './uhr-comp.component';

describe('UhrCompComponent', () => {
  let component: UhrCompComponent;
  let fixture: ComponentFixture<UhrCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UhrCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UhrCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
