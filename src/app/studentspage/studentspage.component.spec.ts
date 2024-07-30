import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentspageComponent } from './studentspage.component';

describe('StudentspageComponent', () => {
  let component: StudentspageComponent;
  let fixture: ComponentFixture<StudentspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
