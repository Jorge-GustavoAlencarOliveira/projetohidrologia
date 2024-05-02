import React from 'react';
import { EquacaoIDFprops } from '../types/types';

const EquacaoIDF = ({ dados }: { dados: EquacaoIDFprops }) => {
  if (dados.k !== '' && dados.a !== '' && dados.b !== '' && dados.c !== '' )
    return (
      <div className="flex justify-between w-1/3 mt-8 flex-wrap text-xl">
        <div>
          <span className="font-bold ">K = </span>
          <span>{dados.k.replace('.', ',')}</span>
        </div>
        <div>
          <span className="font-bold ">a = </span>
          <span>{dados.a.replace('.', ',')}</span>
        </div>
        <div>
          <span className="font-bold ">b = </span>
          <span>{dados.b.replace('.', ',')}</span>
        </div>
        <div>
          <span className="font-bold ">c = </span>
          <span>{dados.c.replace('.', ',')}</span>
        </div>
       
      </div>
    );
  return null;
};

export default EquacaoIDF;
