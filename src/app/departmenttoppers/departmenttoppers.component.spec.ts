import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmenttoppersComponent } from './departmenttoppers.component';

describe('DepartmenttoppersComponent', () => {
  let component: DepartmenttoppersComponent;
  let fixture: ComponentFixture<DepartmenttoppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmenttoppersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmenttoppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
