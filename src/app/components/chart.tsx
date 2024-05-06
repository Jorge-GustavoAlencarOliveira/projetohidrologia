import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { tratarDados } from '../libs/funcoes';
import { useContextData } from '../context/dataContext';

const Chart = () => {
  const { resultados: data, tempos, duracoes } = useContextData();
  const newDuracoes = duracoes.map((item) => item.duracao);
  const newTempos = tempos.map((item) => item.tempo);
  const newarray = tratarDados(data, newDuracoes, newTempos);
  if (!!data.length)
    return (
      <div className="flex flex-col mx-auto">
        <h6 className="text-center text:sm sm:text-2xl mb-2 font-bold">
          Curva IDF
        </h6>
        <div className="w-full relative">
          <span
            className="absolute left-[-75px] bottom-1/2"
            style={{ transform: 'rotate(-90deg)' }}
          >
            Intensidade (mm/h)
          </span>
          <ResponsiveContainer width="100%" height={400} minWidth={300}>
            <LineChart
              width={900}
              height={400}
              data={newarray}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                scale="linear"
                domain={[0, 'dataMax + 10']}
                allowDataOverflow={true}
                dataKey={'duracao'}
              />
              <YAxis domain={[0, 'dataMax + 10']} />
              <Tooltip />
              <Legend />
              {data.map((item, index) => {
                return (
                  <Line
                    key={index}
                    type="monotone"
                    dataKey={`${newTempos[index]}`}
                    stroke={`#${Math.floor(Math.random() * 16777215).toString(
                      16,
                    )}`}
                    legendType={'line'}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <span className="text-center mt-4 mx-auto">Duração (min)</span>
      </div>
    );
  return null;
};

export default Chart;
