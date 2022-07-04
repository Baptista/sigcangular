import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConsultComponent } from './headerconsult.component';

describe('HeaderComponent', () => {
  let component: HeaderConsultComponent;
  let fixture: ComponentFixture<HeaderConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
