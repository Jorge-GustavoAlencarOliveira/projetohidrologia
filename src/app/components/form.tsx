'use client';

import { NumericFormat } from 'react-number-format';
import { equacaoIDF } from '../equacoes/idf';
import { FormEvent } from 'react';
import { EquacaoIDFprops } from '../types/types';

type FormProps = {
  handleResutaldos: (param: string[][]) => void;
  handleDados: (key: any, value: string) => void;
  reset: () => void;
  dados: EquacaoIDFprops;
};

const Form = ({ handleResutaldos, handleDados, dados, reset }: FormProps) => {
  function handleMathIDF(e: FormEvent) {
    e.preventDefault();
    handleResutaldos(equacaoIDF(dados));
    // reset();
  }

  return (
    <div>
      <form onSubmit={handleMathIDF} className="flex flex-col gap-4">
        <div className="flex gap-1 justify-center">
          <div className="flex gap-4 items-center justify-center justify-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
              K
            </label>
            <NumericFormat
              value={dados.k}
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onValueChange={(values) => handleDados('k', values.value)}
              allowNegative={false}
              decimalScale={3}
              decimalSeparator=","
              allowLeadingZeros={false}
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
              a
            </label>
            <NumericFormat
              value={dados.a}
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onValueChange={(values) => handleDados('a', values.value)}
              allowNegative={false}
              decimalScale={3}
              decimalSeparator=","
              allowLeadingZeros={false}
            />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex gap-4 items-center justify-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
              b
            </label>
            <NumericFormat
              value={dados.b}
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onValueChange={(values) => handleDados('b', values.value)}
              allowNegative={false}
              decimalScale={3}
              decimalSeparator=","
              allowLeadingZeros={false}
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
              c
            </label>
            <NumericFormat
              value={dados.c}
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onValueChange={(values) => handleDados('c', values.value)}
              allowNegative={false}
              decimalScale={3}
              decimalSeparator=","
              allowLeadingZeros={false}
            />
          </div>
        </div>
        <div className="flex">
          <button className="mx-auto mt-4 w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Calcular
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
