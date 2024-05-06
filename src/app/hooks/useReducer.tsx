import React from 'react';
import { duracaoReducer, tempoRetornoReducer } from './reducer';

let id = 0;
export const useReducerTempo = () => {
  const [tempos, dispatch] = React.useReducer(tempoRetornoReducer, []);

  function handleAddTempo(tempo: number) {
    dispatch({
      type: 'add',
      id: id++,
      tempo: tempo,
    });
  }

  function handleDeleteTempo(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  function handleResetTempo() {
    dispatch({
      type: 'reset',
    });
  }

  return {
    handleAddTempo,
    handleDeleteTempo,
    handleResetTempo,
    tempos,
  };
};

let id1 = 0;
export const useReducerDuracao = () => {
  const [duracoes, dispatch] = React.useReducer(duracaoReducer, []);

  function handleAddDuracao(duracao: number) {
    if(duracao === 0) return
    dispatch({
      type: 'add',
      id: id1++,
      duracao: duracao,
    });
  }

  function handleDeleteDuracao(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  function handleResetDuracao() {
    dispatch({
      type: 'reset',
    });
  }

  return {
    handleAddDuracao,
    handleDeleteDuracao,
    handleResetDuracao,
    duracoes,
  };
};