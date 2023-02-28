import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulrubriqueComponent } from './bulrubrique.component';

describe('BulrubriqueComponent', () => {
  let component: BulrubriqueComponent;
  let fixture: ComponentFixture<BulrubriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulrubriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulrubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
