import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReceivedCardComponent } from './view-received-card.component';

describe('ViewReceivedCardComponent', () => {
  let component: ViewReceivedCardComponent;
  let fixture: ComponentFixture<ViewReceivedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReceivedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReceivedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
