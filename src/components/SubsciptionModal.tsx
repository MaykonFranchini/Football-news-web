import Modal from 'react-modal';
import { useForm, SubmitHandler } from "react-hook-form";

interface SubscriptioModalProps {
  isOpen: boolean;
  onRequestClose: ()=> void;
  onSubmit: (data: any) => void; 
}

export type Inputs = {
  email: string,
  first_name: string,
  last_name: string,
  club_id: string,
};

export function SubscriptioModal({isOpen, onRequestClose, onSubmit}: SubscriptioModalProps) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Receba as ultimas noticias do seu clube por email</h2>
      <button onClick={onRequestClose}>X</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Digite seu email" {...register('email', {required: true})} />
        {errors.email?.type === 'required' && "Email é obrigatório"}
        <input type="text" placeholder="Nome" {...register('first_name', {required: true})} />
        {errors.first_name?.type === 'required' && "Nome é obrigatório"}
        <input type="text" placeholder="Sobrenome" {...register('last_name', {required: true})} />
        {errors.last_name?.type === 'required' && "Sobrenome é obrigatório"}
        <input type="submit" value="Enviar" />
      </form> 
    </Modal>
  )
}