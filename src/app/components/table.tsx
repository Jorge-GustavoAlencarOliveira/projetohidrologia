import React from 'react'
import { tempodeRetorno, duracao } from '../libs/constantes';
import { DataProps } from '../types/types';

const Table = ({data}: DataProps) => {
  if(!!data.length)
  return ( 
    <div className='my-8'>
      <h6 className='text-center text-2xl mb-2'>Intensidade da chuva em mm/h</h6>
      <table className="mx-auto  min-w-fit table-fixed border-collapse border border-slate-700 text-center">
      <thead>
        <tr>
          <th rowSpan={2} className='border border-slate-700 px-2'>
            Duração
          </th>
          <th className='border border-slate-700' colSpan={8}>Tempo de Retorno</th>
        </tr>
        <tr>
          {tempodeRetorno.map((item) => {
            return <th key={item} className='border border-slate-700 px-2'>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {duracao.map((item, index) => {
          return (
            <tr key={index}>
              <td className='font-bold border border-slate-700 px-2'>{item}</td>
              {data?.map((item1, index1) => {
                return <td key={index1} className='border border-slate-700 px-2'>{item1[index]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  )
  return null
}

export default Table
