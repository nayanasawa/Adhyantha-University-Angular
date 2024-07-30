import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverstiygalleryComponent } from './universtiygallery.component';

describe('UniverstiygalleryComponent', () => {
  let component: UniverstiygalleryComponent;
  let fixture: ComponentFixture<UniverstiygalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniverstiygalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniverstiygalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
