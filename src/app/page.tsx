'use client';

import React from 'react';
import Form from './components/form';
import Image from 'next/image';
import Equacão from './images/equacaoIDF.png';
import Table from './components/table';
import Chart from './components/chart';
import EquacaoIDF from './components/equacaoIDF';
import { useHook } from './hooks/useform';

export default function Home() {
  const { handleDados, handleResultados, resetDados, dados, resultados } =
    useHook();

  return (
    <main className="flex min-h-screen flex-col items-center py-4 bg-slate-50 ">
      <h1 className="mb-6 font-bold text-2xl">Equação IDF</h1>
      <div className="mb-10">
        <Image
          src={Equacão}
          priority={true}
          alt="Equação IDF"
          width={200}
          className="mx-auto mb-4"
        />
        <div className="flex flex-col font-medium">
          <span className="mb-2">em que: </span>
          <span>i – intensidade máxima de precipitação (mm . h–1);</span>
          <span>T – período ou tempo de retorno (anos);</span>
          <span>t – duração da precipitação (minutos);</span>
          <span>k, a, b, c - constantes </span>
        </div>
      </div>
      <Form
        handleResutaldos={handleResultados}
        handleDados={handleDados}
        dados={dados}
        reset={resetDados}
      />
      {/* <EquacaoIDF dados={dados} /> */}
      <Table data={resultados} />
      <Chart data={resultados} />
    </main>
  );
}
