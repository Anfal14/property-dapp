import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePropertyComponent } from './manage-property.component';

describe('ManagePropertyComponent', () => {
  let component: ManagePropertyComponent;
  let fixture: ComponentFixture<ManagePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
