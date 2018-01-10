import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsenComponent } from './artsen.component';

describe('ArtsenComponent', () => {
  let component: ArtsenComponent;
  let fixture: ComponentFixture<ArtsenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
