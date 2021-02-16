import { Lancamento } from 'src/app/shared/interfaces/lancamento.interface';

export interface DashboardResponse {
  contaBanco: Conta;
  contaCredito: Conta;
}

interface Conta {
  id: number;
  lancamentos: Lancamento[];
  saldo: number;
}
