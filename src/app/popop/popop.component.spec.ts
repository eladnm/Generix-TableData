import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopopComponent } from './popop.component';

describe('PopopComponent', () => {
  let component: PopopComponent;
  let fixture: ComponentFixture<PopopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
