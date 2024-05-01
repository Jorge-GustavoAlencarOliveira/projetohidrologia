import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import { tempodeRetorno, duracao } from '../libs/constantes';
const Chart = ({ data }: { data: string[][] }) => {
  const newarray = [];

  for (let i = 0; i < data[0]?.length; i++) {
    const column = data.map((row) => row[i]);
    const obj = {
      duracao: duracao[i]
    };
    for (let j = 0; j < tempodeRetorno.length; j++) {
      obj[tempodeRetorno[j]] = parseFloat(
        column[j].replace(',', '.'),
      );
    }
    newarray.push(obj);
  }

  if(data.length > 0) 
  return (
    <div>
      <h6 className='text-center text-2xl mb-2'>Curva IDF</h6>
      <LineChart width={900} height={400} data={newarray}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={'duracao'}/>
        <YAxis/>
        <Tooltip />
        <Legend />
        {data.map((item, index) => {
          return (
            <Line
              key={index}
              type="monotone"
              dataKey={`${tempodeRetorno[index]}`}
              stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          );
        })}
      </LineChart>
    </div>
  );
  return null
};

export default Chart;
