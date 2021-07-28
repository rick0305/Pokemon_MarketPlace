import * as yup from 'yup';

export const validationSchema = yup.object({
  login: yup.string().required("O campo E-mail é obrigatório"),
  password: yup.string().required("O campo senha é obrigatório"),
}); 