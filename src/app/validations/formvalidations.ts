import z from 'zod'

function cleanNumber (number: string){
  const updateNumber = Number(number.replace('.', '').replace(',',''))
  return updateNumber
}

export const schemaInformations = z.object({
  k: z.string({
    required_error: "Esse campo é obrigatório",
  }).min(1),
  a: z.string({
    required_error: "Esse campo é obrigatório",
  }).min(1),
  b: z.string({
    required_error: "Esse campo é obrigatório",
  }).min(1),
  c: z.string({
    required_error: "Esse campo é obrigatório",
  }).min(1),
})