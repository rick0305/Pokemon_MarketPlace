import React, { createContext, useState, useContext, useCallback} from "react";

import { api } from "../../../services/api";


const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = sessionStorage.getItem("@Academia_login");
    if (token) {
      return token;
    }
    return "";
  });

  const [error, setError] = useState("");

  const SignOut = useCallback(() => {
    sessionStorage.removeItem("@Academia_login");
    setAuth("");
  }, []);

  const SignIn = useCallback(async ({ login, password }) => {
    setError("");
    try {
      if (!login || !password) {
        setError("Login e senha inválidos");
        return;
      }

      const { data } = await api.get(`/users?login=${login}`);

      if (data.length === 0) {
        setError("Login e senha inválidos");
        return;
      }

      if (data[0].password !== password) {
        setError("Login e senha inválidos");
        return;
      }

      setAuth(data[0].access_token);
      sessionStorage.setItem("@Academia_login", data[0].access_token);
      api.defaults.headers.Authorization = `Bearer ${data[0].access_token}`;
    } catch (error) {
      setError("Login e senha inválidos");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        SignIn,
        SignOut,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
