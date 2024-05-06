import { objInitialProps} from '../types/types';

export function tratarDados(
  data: string[][],
  duracao: number[],
  tempodeRetorno: number[],
) {
  const newarray = [
   
  ];

  for (let i = 0; i < data[0]?.length; i++) {
    const column = data.map((row) => row[i]);
    const obj = {
      duracao: duracao[i],
    };
    for (let j = 0; j < tempodeRetorno.length; j++) {
      obj[tempodeRetorno[j]] = parseFloat(column[j].replace(',', '.'));
    }
    newarray.push(obj as objInitialProps);
  }

  return newarray;
}
