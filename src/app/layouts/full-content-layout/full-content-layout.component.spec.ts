import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullContentLayoutComponent } from './full-content-layout.component';

describe('FullContentLayoutComponent', () => {
  let component: FullContentLayoutComponent;
  let fixture: ComponentFixture<FullContentLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FullContentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
