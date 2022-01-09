import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchlayoutComponent } from './switchlayout.component';

describe('SwitchlayoutComponent', () => {
  let component: SwitchlayoutComponent;
  let fixture: ComponentFixture<SwitchlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
