import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessManagementComponentComponent } from './access-management.component';

describe('AccessManagementComponentComponent', () => {
  let component: AccessManagementComponentComponent;
  let fixture: ComponentFixture<AccessManagementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessManagementComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessManagementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
