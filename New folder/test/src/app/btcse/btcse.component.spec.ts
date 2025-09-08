import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcseComponent } from './btcse.component';

describe('BtcseComponent', () => {
  let component: BtcseComponent;
  let fixture: ComponentFixture<BtcseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtcseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtcseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
