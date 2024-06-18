import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisasListComponent } from './divisas-list.component';

describe('DivisasListComponent', () => {
  let component: DivisasListComponent;
  let fixture: ComponentFixture<DivisasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivisasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
