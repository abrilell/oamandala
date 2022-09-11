import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OaSvgShapeComponent } from './oa-svg-shape.component';

describe('OaSvgShapeComponent', () => {
  let component: OaSvgShapeComponent;
  let fixture: ComponentFixture<OaSvgShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OaSvgShapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OaSvgShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
