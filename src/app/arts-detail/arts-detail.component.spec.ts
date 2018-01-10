import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsDetailComponent } from './arts-detail.component';

describe('ArtsDetailComponent', () => {
  let component: ArtsDetailComponent;
  let fixture: ComponentFixture<ArtsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
