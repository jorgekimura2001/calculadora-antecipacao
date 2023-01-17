import { useForm } from "react-hook-form";
import { IForm } from "../../interfaces";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import './style.css'
import { useApp } from "../../context";


const Form = () => {

  const {onSubmit} = useApp()
  
  const formSchema = yup.object().shape({
    amount: yup
            .string()
            .required('É obrigatório')
            .matches(/^\d*\.?\d+$/, "Deve conter apenas números positivos"),
    installments: yup
            .string()
            .required('É obrigatório')
            .matches(/^\d*\.?\d+$/, "Deve conter apenas números positivos")
            .max(2, 'No máximo 12 parcelas.'),
    mdr: yup
            .string()
            .required('É obrigatório')
            .matches(/^\d*\.?\d+$/, "Deve conter apenas números positivos"),
})

  const {register, handleSubmit, formState: {errors}} = useForm<IForm>({
      resolver: yupResolver(formSchema)
  })


  const handleSubmitForm = async (data: IForm) => {
    const dayNumber = data.days!.filter(day => +day > 0)
    const amountInCents = (+data.amount*100) 
    const dataNumber = {amount: amountInCents, installments: +data.installments, mdr: +data.mdr, days: dayNumber.length ? dayNumber : undefined}
    onSubmit(dataNumber)
  };

  return (
  <>
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label htmlFor="amount" className="label">
        Informe o valor da venda *
      </label>
      <input
        type="number"
        id="amount"
        placeholder="R$"
        className="input"
        {...register('amount')}
        />
      <p>{errors.amount?.message}</p>

      <label htmlFor="installments" className="label">
        Em quantas parcelas *
      </label>
      <input
        type="number"
        id="installments"
        placeholder="R$"
        className="input"
        {...register('installments')}
        />
      <span>Máximo de 12 parcelas</span>
      <p>{errors.installments?.message}</p>

      <label htmlFor="mdr" className="label">
        Informe o percentual de MDR *
      </label>
      <input
        type="number"
        id="mdr"
        placeholder="R$"
        className="input"
        {...register('mdr')}
        />
      <p>{errors.mdr?.message}</p>

      <label htmlFor="days" className="label">
        Informe o(s) dia(s) 
      </label>
      <input
        type="number"
        id="days"
        placeholder="R$"
        className="input"
        {...register('days.0')}
        />

      <input
        type="number"
        id="days"
        placeholder="R$"
        className="input"
        {...register('days.1')}
        />

      <input
        type="number"
        id="days"
        placeholder="R$"
        className="input"
        {...register('days.2')}
        />


      <input className="input-invisible" type="submit" value='Enviar'/>
      
    </form>
  </>
  );
};

export default Form;
