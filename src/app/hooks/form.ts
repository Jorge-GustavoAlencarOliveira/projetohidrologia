import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { schemaInformations } from '../validations/formvalidations';

export type TinformationSchema = z.infer<typeof schemaInformations>;

export const useInformations = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<TinformationSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(schemaInformations),
  });
  return {
    handleSubmit,
    errors,
    register
  }
};
