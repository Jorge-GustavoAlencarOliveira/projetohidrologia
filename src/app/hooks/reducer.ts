export type moduloTempoRetorno = {
  id: number;
  tempo?: number;
};

type actionTempoRetorno = {
  type: 'add' | 'delete' | 'reset';
  id?: number;
  tempo?: number;
};

export const tempoRetornoReducer = (
  modulos: moduloTempoRetorno[],
  action: actionTempoRetorno,
) => {
  switch (action.type) {
    case 'add': {
      return [
        ...modulos,
        {
          id: action.id,
          tempo: action.tempo,
        },
      ];
    }
    case 'delete': {
      return modulos.filter((item) => item.id !== action.id);
    }
    case 'reset': {
      return [];
    }
    default:
      throw Error('ação desconhecida');
  }
};

export type moduloDuracao = {
  id: number;
  duracao?: number;
};

type actionDuracao = {
  type: 'add' | 'delete' | 'reset';
  id?: number;
  duracao?: number;
};

export const duracaoReducer = (
  modulos: moduloDuracao[],
  action: actionDuracao,
) => {
  switch (action.type) {
    case 'add': {
      return [
        ...modulos,
        {
          id: action.id,
          duracao: action.duracao,
        },
      ];
    }
    case 'delete': {
      return modulos.filter((item) => item.id !== action.id);
    }
    case 'reset': {
      return [];
    }
    default:
      throw Error('ação desconhecida');
  }
};

