import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuziekComponent } from './muziek.component';

describe('MuziekComponent', () => {
  let component: MuziekComponent;
  let fixture: ComponentFixture<MuziekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuziekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuziekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
