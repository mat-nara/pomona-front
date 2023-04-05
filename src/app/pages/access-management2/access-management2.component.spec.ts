import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessManagement2Component } from './access-management2.component';

describe('AccessManagement2Component', () => {
  let component: AccessManagement2Component;
  let fixture: ComponentFixture<AccessManagement2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessManagement2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessManagement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
