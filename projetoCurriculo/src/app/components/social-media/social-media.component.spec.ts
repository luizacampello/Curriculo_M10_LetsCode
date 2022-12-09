import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociaLMediaComponent } from './social-media.component';

describe('SociaLMediaComponent', () => {
  let component: SociaLMediaComponent;
  let fixture: ComponentFixture<SociaLMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociaLMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SociaLMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
