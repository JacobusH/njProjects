import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NjComponentsComponent } from './nj-components.component';

describe('NjComponentsComponent', () => {
  let component: NjComponentsComponent;
  let fixture: ComponentFixture<NjComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NjComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NjComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
