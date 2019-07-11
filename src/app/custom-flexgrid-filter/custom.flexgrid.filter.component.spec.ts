import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFlexgridFilterComponent } from './custom.flexgrid.filter.component';

describe('CustomFlexgridFilterComponent', () => {
  let component: CustomFlexgridFilterComponent;
  let fixture: ComponentFixture<CustomFlexgridFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFlexgridFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFlexgridFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
