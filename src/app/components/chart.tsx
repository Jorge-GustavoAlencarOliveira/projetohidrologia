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
import { tempodeRetorno, duracao } from '../libs/constantes';
import { tratarDados } from '../libs/funcoes';

const Chart = ({ data }: { data: string[][] }) => {
  const newarray = tratarDados(data, duracao, tempodeRetorno);
  if (!!data.length)
    return (
      <div className="flex flex-col">
        <h6 className="text-center text-2xl mb-2">Curva IDF</h6>
        <div className="flex items-center w-full">
          <div className="flex" style={{ transform: 'rotate(-90deg)' }}>
            <span className="text-center">Intensidade (mm/h)</span>
          </div>
          <ResponsiveContainer width="100%" height={400}>
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
                    dataKey={`${tempodeRetorno[index]}`}
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
