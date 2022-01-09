import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lay1compComponent } from './lay1comp.component';

describe('Lay1compComponent', () => {
  let component: Lay1compComponent;
  let fixture: ComponentFixture<Lay1compComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lay1compComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lay1compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
