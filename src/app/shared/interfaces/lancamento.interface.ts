import { PlanoConta } from './planos-conta.interface';

export interface Lancamento {
  conta: number;
  data: string;
  descricao: string;
  id: number;
  planoConta: PlanoConta;
  tipo: string;
  valor: number;
}
