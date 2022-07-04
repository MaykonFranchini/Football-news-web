import Modal from 'react-modal';
import { useForm, SubmitHandler } from "react-hook-form";
import styles from './SubscriptionModal.module.css';
import { X } from 'phosphor-react';


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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content' >
      <div className={styles.modalWrapper}>
        <h2>Receba as ultimas noticias do seu clube por email</h2>
        <button onClick={onRequestClose} type='button'><X size={20} color="#1e3a8a" weight="bold" /></button>

        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email?.type === 'required' && <p className={styles.errorMsg}>Email é obrigatório</p>}
          <input type="text" placeholder="Digite seu email" {...register('email', {required: true})} />
          
          {errors.first_name?.type === 'required' && <p className={styles.errorMsg}>Nome é obrigatório</p>}
          <input type="text" placeholder="Nome" {...register('first_name', {required: true})} />
          
          {errors.last_name?.type === 'required' && <p className={styles.errorMsg}>Sobrenome é obrigatório</p>}
          <input type="text" placeholder="Sobrenome" {...register('last_name', {required: true})} />
          <input type="submit" value="Enviar" />
        </form> 
      </div>
    </Modal>
  )
}