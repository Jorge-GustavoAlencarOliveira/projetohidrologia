import React from 'react';
import { useContextData } from '../context/dataContext';

const Table = () => {
  const { resultados: data, tempos, duracoes } = useContextData();
  if (!!data.length)
    return (
      <div className="my-8">
        <h6 className="text-center text:sm sm:text-2xl mb-2 font-bold">
          Intensidade da chuva em mm/h
        </h6>
        <table className="text-xs sm:text-base mx-auto table-auto border-collapse border border-slate-700 text-center">
          <thead>
            <tr>
              <th rowSpan={2} className="border border-slate-700 px-2">
                Duração
              </th>
              <th className="border border-slate-700" colSpan={8}>
                Tempo de Retorno
              </th>
            </tr>
            <tr>
              {tempos.map((item) => {
                return (
                  <th key={item.id} className="border border-slate-700 px-2">
                    {item.tempo}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {duracoes.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="font-bold border border-slate-700 px-2">
                    {item.duracao}
                  </td>
                  {data?.map((item1, index1) => {
                    return (
                      <td key={index1} className="border border-slate-700 px-2">
                        {item1[index]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  return null;
};

export default Table;
