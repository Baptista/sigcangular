import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelformComponent } from './panelform.component';

describe('PanelformComponent', () => {
  let component: PanelformComponent;
  let fixture: ComponentFixture<PanelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
