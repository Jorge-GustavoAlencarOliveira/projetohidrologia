import React from 'react';
import { EquacaoIDFprops } from '../types/types';

export const useHook = () => {
  const [resultados, setResultados] = React.useState<string[][]>([]);
  const [dados, setDados] = React.useState<EquacaoIDFprops>({
    k: '',
    a: '',
    b: '',
    c: '',
  });
  function handleResultados(resultados: string[][]) {
    setResultados(resultados);
  }
  function handleDados(key: any, value: string) {
    setDados((prev) => ({ ...prev, [key]: value }));
  }
  function resetDados() {
    setDados({
      k: '',
      a: '',
      b: '',
      c: '',
    });
  }

  return {
    resetDados,
    handleDados,
    handleResultados,
    dados,
    resultados,
  };
};
