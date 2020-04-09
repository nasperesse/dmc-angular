import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmcComponent } from './dmc.component';

describe('DmcComponent', () => {
  let component: DmcComponent;
  let fixture: ComponentFixture<DmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
