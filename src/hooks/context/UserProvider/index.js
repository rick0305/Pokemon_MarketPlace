import React, { createContext, useState, useCallback, useContext } from 'react';
import { api } from '../../../services/api'


const UserContext = createContext({});

function UserProvider({children}) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const getUsers = useCallback(
    async () => {
      try {
        const { data } = await api.get('/users');
        setUsers(data);
        console.log("teste", data);
      } catch (error) {
        setError("Erro ao adquirir a lista de usuarios");
      }
    }, []
  );

  const postUsers = useCallback(
    async ({login, password, name, gender, origin, work}) => {
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
        setError("Erro ao cadastrar o usuario");
      }
    }, []
   );

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
        setError("Erro ao editar o usuario");
      }
    }, []
  );

  const deleteUser = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/users/${id}`);
        setUsers(pState => pState.filter(
          state => state.id !== id
        ));
      } catch (error) {
        setError("Erro ao deletar o usuario");
      }
    }, []
  );
  

  return (
    <UserContext.Provider
      value={{
        users,
        error,
        getUsers,
        postUsers,
        putUser,
        deleteUser
      }}>
        {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  return context;
}


export { UserProvider, useUser };