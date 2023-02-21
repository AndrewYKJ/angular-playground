import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabpage2Component } from './tabpage2.component';

describe('Tabpage2Component', () => {
  let component: Tabpage2Component;
  let fixture: ComponentFixture<Tabpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabpage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
