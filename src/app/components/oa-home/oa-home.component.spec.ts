import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OaHomeComponent } from './oa-home.component';

describe('OaHomeComponent', () => {
  let component: OaHomeComponent;
  let fixture: ComponentFixture<OaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
