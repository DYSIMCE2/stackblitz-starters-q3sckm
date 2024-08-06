import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPadeComponent } from './edit-page.component';

describe('EditPadeComponent', () => {
  let component: EditPadeComponent;
  let fixture: ComponentFixture<EditPadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
