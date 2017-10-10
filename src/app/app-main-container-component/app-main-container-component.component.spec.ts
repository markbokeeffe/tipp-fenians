import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainContainerComponentComponent } from './app-main-container-component.component';

describe('AppMainContainerComponentComponent', () => {
  let component: AppMainContainerComponentComponent;
  let fixture: ComponentFixture<AppMainContainerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainContainerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
