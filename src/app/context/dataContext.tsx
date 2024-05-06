'use client';

import React, { createContext } from 'react';
import { useHook } from '../hooks/useform';
import { EquacaoIDFprops } from '../types/types';
import { useReducerDuracao, useReducerTempo } from '../hooks/useReducer';
import { moduloDuracao, moduloTempoRetorno } from '../hooks/reducer';

type TDataContext = {
  resetDados: () => void;
  handleDados: (key: any, value: string) => void;
  handleResultados: (credentials: string[][]) => void;
  dados: EquacaoIDFprops;
  resultados: string[][];
  handleAddTempo: (tempo: number) => void;
  handleDeleteTempo: (id: number) => void;
  handleResetTempo: () => void;
  tempos: moduloTempoRetorno[];
  handleAddDuracao: (duracao: number) => void;
  handleDeleteDuracao: (id: number) => void;
  handleResetDuracao: () => void;
  duracoes: moduloDuracao[];
};

export const DataContext = createContext<TDataContext | null>(null);

export const useContextData = () => {
  const context = React.useContext(DataContext);
  if (context === null) {
    throw new Error('useContext está sem o provider');
  }
  return context;
};

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { resetDados, handleDados, handleResultados, dados, resultados } =
    useHook();
  const { handleAddTempo, handleDeleteTempo, handleResetTempo, tempos } =
    useReducerTempo();
  const {
    handleAddDuracao,
    handleDeleteDuracao,
    handleResetDuracao,
    duracoes,
  } = useReducerDuracao();
  return (
    <DataContext.Provider
      value={{
        resetDados,
        handleDados,
        handleResultados,
        dados,
        resultados,
        handleAddTempo,
        handleDeleteTempo,
        handleResetTempo,
        tempos,
        handleAddDuracao,
        handleDeleteDuracao,
        handleResetDuracao,
        duracoes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
