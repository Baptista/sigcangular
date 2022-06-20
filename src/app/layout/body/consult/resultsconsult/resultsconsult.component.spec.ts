import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsconsultComponent } from './resultsconsult.component';

describe('ResultsconsultComponent', () => {
  let component: ResultsconsultComponent;
  let fixture: ComponentFixture<ResultsconsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsconsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsconsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
