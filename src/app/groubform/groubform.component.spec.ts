import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroubformComponent } from './groubform.component';

describe('GroubformComponent', () => {
  let component: GroubformComponent;
  let fixture: ComponentFixture<GroubformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroubformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroubformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
