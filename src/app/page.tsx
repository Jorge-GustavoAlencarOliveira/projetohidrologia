'use client';

import React from 'react';
import Form from './components/form';
import Image from 'next/image';
import Equacão from './images/equacaoIDF.png';
import Table from './components/table';
import Chart from './components/chart';

export default function Home() {
  return (
    <main className="max-w-[700px] flex flex-col px-3 py-4">
      <h1 className="mb-6 font-bold text-2xl text-center">Equação IDF</h1>
      <div className="mb-10">
        <Image
          src={Equacão}
          priority={true}
          alt="Equação IDF"
          width={150}
          className="mb-4 mx-auto"
        />
        <div className="flex flex-col text-base sm:text-medium">
          <span className="mb-2">em que: </span>
          <span>i – intensidade máxima de precipitação (mm/h);</span>
          <span>T – período ou tempo de retorno (anos);</span>
          <span>t – duração da precipitação (minutos);</span>
          <span>k, a, b, c - constantes </span>
        </div>
      </div>
      <Form />
      <Table />
      <Chart />
    </main>
  );
}
