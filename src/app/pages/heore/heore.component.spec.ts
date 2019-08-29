import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeoreComponent } from './heore.component';

describe('HeoreComponent', () => {
  let component: HeoreComponent;
  let fixture: ComponentFixture<HeoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
