import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeengComponent } from './ceeng.component';

describe('CeengComponent', () => {
  let component: CeengComponent;
  let fixture: ComponentFixture<CeengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeengComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
