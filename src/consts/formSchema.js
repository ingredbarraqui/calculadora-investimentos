import {
  object,
  string,
} from 'yup';


export const calculadora = object()
.shape({
  investimentoInicial: string()
    .label('Investimento inicial')
    .required('Preencha um investimento inicial'),
  investimentoMensal: string()
    .label('Investimento mensal')
    .required('Preencha um investimento mensal'),
  tempo: string()
    .label('Quanto tempo deixaria seu dinheiro investido?')
    .required('Preencha um tempo'),
});
