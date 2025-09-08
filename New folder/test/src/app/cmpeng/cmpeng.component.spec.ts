import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpengComponent } from './cmpeng.component';

describe('CmpengComponent', () => {
  let component: CmpengComponent;
  let fixture: ComponentFixture<CmpengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpengComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
