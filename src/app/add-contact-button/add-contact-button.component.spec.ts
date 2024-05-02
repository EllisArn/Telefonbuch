import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactButtonComponent } from './add-contact-button.component';

describe('AddContactButtonComponent', () => {
  let component: AddContactButtonComponent;
  let fixture: ComponentFixture<AddContactButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddContactButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddContactButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
