import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariocrudComponent } from './funcionariocrud.component';

describe('FuncionariocrudComponent', () => {
  let component: FuncionariocrudComponent;
  let fixture: ComponentFixture<FuncionariocrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariocrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariocrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
