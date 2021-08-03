// requisições, regras de negocio

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const RegisterContext = createContext({});

function RegisterProvider({children}) {
  const [register, setRegisters] = useState([]);
  const [error, setError] = useState("");

  const getUsers = useCallback(
    async () => {
      try {
        const { data } = await api.get('/users');
        setRegisters(data);
      } catch (error) {
        setError("Erro ao adquirir a lista de usuários");
      }
  }, []);
 
  const postUser = useCallback(
    async ({login, password, name, gender, origin, work}) => {
      console.log("entrei");
      try {
        await api.post('/users', {
          login,
          password,
          name,        
          gender,
          origin,
          work
        });
      } catch (error) {
        setError("Erro ao criar usuário");
      }
  }, []);

  const putUser = useCallback(
    async ({id, login, password, name, gender, origin, work}) => {
      try {
        await api.put(`/users/${id}`, {
          login,
          password,
          name,        
          gender,
          origin,
          work
        });
      } catch (error) {
        setError("Erro ao editar perfil");
      }
  }, []);

  const deleteUser = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/users/${id}`);
        setRegisters(pState => pState.filter(
          state => state.id !== id
        ));
      } catch (error) {
        setError("Erro ao excluir perfil");
      }
  }, []);

  return (
    <RegisterContext.Provider 
      value={{
        register, 
        error,
        getUsers,
        postUser,
        putUser,
        deleteUser
    }}>
      {children}
    </RegisterContext.Provider>
  );
}

function useRegister() {
  const context = useContext(RegisterContext);
  return context;
}

export { RegisterProvider, useRegister };