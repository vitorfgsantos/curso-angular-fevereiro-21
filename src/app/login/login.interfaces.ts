import { Usuario } from '../shared/interfaces/usuario.interface';

export interface LoginCredenciais {
  usuario: string;
  senha: string;
}

export interface LoginResponse {
  conta: {
    descricao: string;
    id: number;
    numero: string;
    saldo: number;
    tipo: string;
  },
  contaCredito: {
    descricao: string;
    id: number;
    numero: string;
    saldo: number;
    tipo: string;
  },
  dataFim: Date,
  dataInicio: Date,
  token: string;
  usuario: Usuario;
}