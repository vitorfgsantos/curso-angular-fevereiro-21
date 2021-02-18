import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesLancamentoComponent } from './detalhes-lancamento.component';

describe('DetalhesLancamentoComponent', () => {
  let component: DetalhesLancamentoComponent;
  let fixture: ComponentFixture<DetalhesLancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesLancamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
