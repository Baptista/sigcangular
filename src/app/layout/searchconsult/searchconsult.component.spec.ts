import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchconsultComponent } from './searchconsult.component';

describe('SearchconsultComponent', () => {
  let component: SearchconsultComponent;
  let fixture: ComponentFixture<SearchconsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchconsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchconsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
