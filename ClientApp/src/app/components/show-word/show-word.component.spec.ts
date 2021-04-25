import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWordComponent } from './show-word.component';

describe('ShowWordComponent', () => {
  let component: ShowWordComponent;
  let fixture: ComponentFixture<ShowWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
