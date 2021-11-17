import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateViajesComponent } from './create-viajes.component';

describe('CreateViajesComponent', () => {
  let component: CreateViajesComponent;
  let fixture: ComponentFixture<CreateViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateViajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
