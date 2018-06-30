import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamCatcherComponent } from './dream-catcher.component';

describe('DreamCatcherComponent', () => {
  let component: DreamCatcherComponent;
  let fixture: ComponentFixture<DreamCatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamCatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamCatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
