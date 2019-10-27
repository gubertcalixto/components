import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLoaderComponent } from './example-loader.component';

describe('ExampleLoaderComponent', () => {
  let component: ExampleLoaderComponent;
  let fixture: ComponentFixture<ExampleLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
