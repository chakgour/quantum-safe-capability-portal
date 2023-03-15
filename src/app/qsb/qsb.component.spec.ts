import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QsbComponent } from './qsb.component';

describe('QsbComponent', () => {
  let component: QsbComponent;
  let fixture: ComponentFixture<QsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
