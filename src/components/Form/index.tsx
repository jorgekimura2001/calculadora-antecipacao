import { useForm } from "react-hook-form";
import { IForm } from "../../interfaces";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import './style.ts'
import { useApp } from "../../context";
import { ContainerStyled } from "./style";


const Form = () => {

  const {onSubmit, isClick, setIsClick} = useApp()

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
    if (data.days !== undefined){
      let dayNumber = data.days.filter(day => day.toString() !== '' && day.toString() !== '0')
      if (dayNumber.length === 0){
        dayNumber = [1, 15, 30, 90]
      }
      const amountInCents = (+data.amount*100)
      const dataNumber = {amount: amountInCents, installments: +data.installments, mdr: +data.mdr, days: dayNumber}
      onSubmit(dataNumber)
    }else{
      const amountInCents = (+data.amount*100) 
      const dataNumber = {amount: amountInCents, installments: +data.installments, mdr: +data.mdr}
      onSubmit(dataNumber)
    }
  };

  return (
  <ContainerStyled>
    <h1>Simule sua Antecipação</h1>
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label htmlFor="amount" className="label">
        Informe o valor da venda *
      </label>
      <div>
        <span className="amount">R$</span>
        <input
          type="string"
          id="amount"
          placeholder="Ex: 250.55"
          className="input"
          {...register('amount')}
          />
        <p>{errors.amount?.message}</p>
      </div>

      <label htmlFor="installments" className="label">
        Em quantas parcelas *
      </label>
      <input
        type="number"
        id="installments"
        placeholder="Ex: 10"
        className="input"
        {...register('installments')}
        />
      <span className="max">Máximo de 12 parcelas</span>
      <p>{errors.installments?.message}</p>

      <label htmlFor="mdr" className="label">
        Informe o percentual de MDR *
      </label>
      <input
        type="number"
        id="mdr"
        placeholder="Ex: 4"
        className="input"
        {...register('mdr')}
        />
      <p>{errors.mdr?.message}</p>

      {
        isClick && 
      <>
        <label htmlFor="days" className="label">
          Informe o(s) dia(s) 
        </label>
        <div className="days">
          <input
            type="number"
            id="days"
            placeholder="Ex: 5"
            className="input-day"
            {...register('days.0')}
            />

          <input
            type="number"
            id="days"
            placeholder="Ex: 10"
            className="input-day"
            {...register('days.1')}
            />

          <input
            type="number"
            id="days"
            placeholder="Ex: 200"
            className="input-day"
            {...register('days.2')}
            />
        </div>
      </>
      }
      <input className="input-invisible" type="submit" value='Enviar'/>
      
    </form>

    <button className="btn-days" onClick={() => setIsClick(!isClick)}>
      {
        isClick ? 'Cancelar' : 'Gostaria de informar o(s) dia(s) do recebimento?'
      }
    </button>
  </ContainerStyled>
  );
};

export default Form;
