import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedCardsComponent } from './received-cards.component';

describe('ReceivedCardsComponent', () => {
  let component: ReceivedCardsComponent;
  let fixture: ComponentFixture<ReceivedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
