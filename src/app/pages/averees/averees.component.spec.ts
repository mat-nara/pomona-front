import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvereesComponent } from './averees.component';

describe('AvereesComponent', () => {
  let component: AvereesComponent;
  let fixture: ComponentFixture<AvereesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvereesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvereesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
