import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lay2compComponent } from './lay2comp.component';

describe('Lay2compComponent', () => {
  let component: Lay2compComponent;
  let fixture: ComponentFixture<Lay2compComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lay2compComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lay2compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
