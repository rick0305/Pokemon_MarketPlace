import * as yup from 'yup';

export const validationSchema = yup.object({
  login: yup.string().required("O campo login é obrigatório"),
  password: yup.string().required("O campo senha é obrigatório"),
  name: yup.string().required("O campo nome é obrigatório"),
  gender: yup.string().required("O campo sexo é obrigatório"),
  origin: yup.string().required("O campo origem é obrigatório"),
  work: yup.string().required("O campo função é obrigatório"),
}); 