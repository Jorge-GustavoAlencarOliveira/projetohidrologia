import { tempodeRetorno, duracao } from "../libs/constantes"

type EquacaoIDFprops = {
  k?: string,
  a?: string,
  b?: string,
  c?: string
}

export const equacaoIDF = ({k, a, b, c}: EquacaoIDFprops) => {
  let resultados: string[][] = []
  tempodeRetorno.map((item) => {
    let resultado: string[] = []
    duracao.map(item1 => {
      resultado.push(((+k * (item ** +a))/(((item1 + (+b)) ** +c))).toFixed(2).replace('.', ','))
    })
    resultados.push(resultado)
    resultado = []
  })
  return resultados
}