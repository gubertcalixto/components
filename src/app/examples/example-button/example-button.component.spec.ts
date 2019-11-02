import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleButtonComponent } from './example-button.component';

describe('ExampleButtonComponent', () => {
  let component: ExampleButtonComponent;
  let fixture: ComponentFixture<ExampleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
