import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabpage3Component } from './tabpage3.component';

describe('Tabpage3Component', () => {
  let component: Tabpage3Component;
  let fixture: ComponentFixture<Tabpage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabpage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
