import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabpage1Component } from './tabpage1.component';

describe('Tabpage1Component', () => {
  let component: Tabpage1Component;
  let fixture: ComponentFixture<Tabpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabpage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
