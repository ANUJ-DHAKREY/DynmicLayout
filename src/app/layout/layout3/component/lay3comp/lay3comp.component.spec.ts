import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lay3compComponent } from './lay3comp.component';

describe('Lay3compComponent', () => {
  let component: Lay3compComponent;
  let fixture: ComponentFixture<Lay3compComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lay3compComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lay3compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
