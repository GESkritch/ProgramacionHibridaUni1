import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CirculoComponent } from './circulo.component';

describe('CircleComponent', () => {
  let component: CirculoComponent;
  let fixture: ComponentFixture<CirculoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CirculoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CirculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
