'use client';

import { TinformationSchema, useInformations } from '../hooks/form';
import { equacaoIDF } from '../equacoes/idf';

type FormProps = {
  handleResutaldos: (param: string[][]) => void
}

const Form = ({handleResutaldos}: FormProps) => {
  const { handleSubmit, errors, register } = useInformations();

  function handleMathIDF(data: TinformationSchema) {
    handleResutaldos(equacaoIDF(data));
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleMathIDF)}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-1 justify-center">
          <div className="flex gap-4 items-center justify-center justify-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
              K
            </label>
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              {...register('k')}
            />
            {errors && <span>{errors.k?.message}</span>}
          </div>
          <div className="flex gap-4 items-center justify-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
              a
            </label>
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              {...register('a')}
            />
            {errors && (
              <span className="text-xs text-red-800 block">
                {errors.a?.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex gap-4 items-center justify-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
              b
            </label>
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              {...register('b')}
            />
            {errors && <span>{errors.b?.message}</span>}
          </div>
          <div className="flex gap-4 items-center justify-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
              c
            </label>
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              {...register('c')}
            />
            {errors && <span>{errors.c?.message}</span>}
          </div>
        </div>
        <div className="flex">
          <button className="mx-auto mt-4 w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Calcular
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
