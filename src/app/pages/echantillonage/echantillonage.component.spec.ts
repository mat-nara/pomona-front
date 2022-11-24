import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchantillonageComponent } from './echantillonage.component';

describe('EchantillonageComponent', () => {
  let component: EchantillonageComponent;
  let fixture: ComponentFixture<EchantillonageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchantillonageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchantillonageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
