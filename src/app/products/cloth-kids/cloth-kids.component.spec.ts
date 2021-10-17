import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothKidsComponent } from './cloth-kids.component';

describe('ClothKidsComponent', () => {
  let component: ClothKidsComponent;
  let fixture: ComponentFixture<ClothKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
