import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosContaComponent } from './planos-conta.component';

describe('PlanosContaComponent', () => {
  let component: PlanosContaComponent;
  let fixture: ComponentFixture<PlanosContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanosContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
