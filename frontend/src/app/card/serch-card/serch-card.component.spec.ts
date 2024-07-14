import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchCardComponent } from './serch-card.component';

describe('SerchCardComponent', () => {
  let component: SerchCardComponent;
  let fixture: ComponentFixture<SerchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
