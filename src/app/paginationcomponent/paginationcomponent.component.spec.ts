import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationcomponentComponent } from './paginationcomponent.component';

describe('PaginationcomponentComponent', () => {
  let component: PaginationcomponentComponent;
  let fixture: ComponentFixture<PaginationcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
