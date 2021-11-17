import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViajesComponent } from './list-viajes.component';

describe('ListViajesComponent', () => {
  let component: ListViajesComponent;
  let fixture: ComponentFixture<ListViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
