import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BassistComponent } from './bassist.component';

describe('BassistComponent', () => {
  let component: BassistComponent;
  let fixture: ComponentFixture<BassistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BassistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BassistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
