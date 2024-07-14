import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkshareCardComponent } from './linkshare-card.component';

describe('LinkshareCardComponent', () => {
  let component: LinkshareCardComponent;
  let fixture: ComponentFixture<LinkshareCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkshareCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkshareCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
