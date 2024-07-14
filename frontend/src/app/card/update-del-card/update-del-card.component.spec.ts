import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDelCardComponent } from './update-del-card.component';

describe('UpdateDelCardComponent', () => {
  let component: UpdateDelCardComponent;
  let fixture: ComponentFixture<UpdateDelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDelCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
