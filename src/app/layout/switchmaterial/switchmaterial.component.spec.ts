import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMaterialComponent } from './switchmaterial.component';

describe('SelectformComponent', () => {
  let component: SwitchMaterialComponent;
  let fixture: ComponentFixture<SwitchMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
