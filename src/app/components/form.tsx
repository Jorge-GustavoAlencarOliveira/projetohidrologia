'use client';

import React from 'react';
import { NumericFormat } from 'react-number-format';
import { equacaoIDF } from '../equacoes/idf';
import { FormEvent } from 'react';
import { useContextData } from '../context/dataContext';
import { FaTrash } from 'react-icons/fa';
const Form = () => {
  const {
    handleResultados,
    dados,
    handleDados,
    tempos,
    handleAddTempo,
    handleDeleteTempo,
    handleResetTempo,
    duracoes,
    handleAddDuracao,
    handleDeleteDuracao,
  } = useContextData();
  const [valorDuracao, setValorDuracao] = React.useState('');
  const [valortempoRetorno, setValorTempoRetorno] = React.useState('');

  function handleMathIDF(e: FormEvent) {
    e.preventDefault();
    if(duracoes.length === 0 || tempos.length === 0 || dados.k === '' || dados.a === '' || dados.b === '' || dados.c === '') return
    handleResultados(
      equacaoIDF(
        dados,
        tempos.map((item) => item.tempo),
        duracoes.map((item) => item.duracao),
      ),
    );
  }


  return (
    <div className="flex flex-col gap-8">
      <div className="flex sm:gap-8 gap-0 sm:flex-row flex-col justify-center">
        <div className='flex justify-center sm:justify-start'>
          <div className="flex flex-col gap-4 items-center mb-6">
            <label className="text-gray-700 text-sm font-bold text-xl">
              Tempo de Retorno
            </label>
            <NumericFormat
              value={valortempoRetorno}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              onValueChange={(values) => setValorTempoRetorno(values.value)}
              allowNegative={false}
              decimalScale={0}
              allowLeadingZeros={false}
              placeholder="anos"
            />
            <button
              onClick={() => {
                if(valortempoRetorno === '' || valortempoRetorno === '0') return
                handleAddTempo(+valortempoRetorno);
                setValorTempoRetorno('');
              }}
              className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
            >
              Adicionar
            </button>
              {!!tempos.length && (
                <table style={{minWidth: '120px'}} className="table-fixed border-collapse border border-slate-700 text-center">
                  <thead>
                    <tr className="border border-slate-700 px-2 text-center">
                      <th>Tempos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tempos.map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <td className="font-bold border border-slate-400 px-2 flex justify-between items-center">
                            {item.tempo} anos
                            <FaTrash
                              style={{ cursor: 'pointer' }}
                              size={16}
                              onClick={() => handleDeleteTempo(item.id)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
          </div>
        </div>
        <div className="flex justify-center sm:justify-start">
          <div className="flex flex-col gap-4 items-center">
            <label className="text-gray-700 text-sm font-bold text-xl">
              Duração
            </label>
            <NumericFormat
              value={valorDuracao}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              onValueChange={(values) => setValorDuracao(values.value)}
              allowNegative={false}
              decimalScale={0}
              allowLeadingZeros={false}
              placeholder="minutos"
            />
            <button
              onClick={() => {
                if(valorDuracao === '' || valorDuracao === '0') return
                handleAddDuracao(+valorDuracao);
                setValorDuracao('');
              }}
              className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
            >
              Adicionar
            </button>
            <div>
              {!!duracoes.length && (
                <table style={{minWidth: '120px'}} className="table-fixed border-collapse border border-slate-700 text-center">
                  <thead>
                    <tr className="border border-slate-700 px-2">
                      <th>Durações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {duracoes.map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <td className="font-bold border border-slate-400 px-2 flex justify-between items-center">
                            {item.duracao} min
                            <FaTrash
                              style={{ cursor: 'pointer' }}
                              size={16}
                              onClick={() => handleDeleteDuracao(item.id)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className='text-gray-700 text-sm font-bold text-xl text-center'>Constantes</span>
        <div className="flex gap-8 justify-center">
          <div className="flex gap-4 items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl pt-2">
              K
            </label>
            <NumericFormat
              value={dados.k}
              className="shadow appearance-none border rounded w-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onValueChange={(values) => handleDados('k', values.value)}
              allowNegative={false}
              decimalScale={3}
              decimalSeparator=","
              allowLeadingZeros={false}
            />
          </div>
          <div className="flex gap-4 items-center ">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl pt-2">
              a
            </label>
            <NumericFormat
              value={dados.a}
              className="shadow appearance-none border rounded w-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onValueChange={(values) => handleDados('a', values.value)}
              allowNegative={false}
              decimalScale={3}
              decimalSeparator=","
              allowLeadingZeros={false}
            />
          </div>
        </div>
        <div className="flex justify-center  gap-8">
          <div className="flex gap-4 items-center ">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl pt-2">
              b
            </label>
            <NumericFormat
              value={dados.b}
              className="shadow appearance-none border rounded w-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onValueChange={(values) => handleDados('b', values.value)}
              allowNegative={false}
              decimalScale={3}
              decimalSeparator=","
              allowLeadingZeros={false}
            />
          </div>
          <div className="flex gap-4 items-center ">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl pt-2">
              c
            </label>
            <NumericFormat
              value={dados.c}
              className="shadow appearance-none border rounded w-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onValueChange={(values) => handleDados('c', values.value)}
              allowNegative={false}
              decimalScale={3}
              decimalSeparator=","
              allowLeadingZeros={false}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          onClick={handleMathIDF}
          className="mx-auto w-3/4 sm:w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
        >
          Calcular
        </button>
      </div>
    </div>
  );
};

export default Form;
