import { createContext, ReactNode, FC } from 'react';
import { AuthContextProps,AuthState } from '../types/Auth';
import { types } from '../types/typeUser';
import { authReducer } from '../reducers/authReducer';
import { useReducer } from 'react';


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {
    isLogged: localStorage.getItem('isLogged') === 'true',
    token: localStorage.getItem('token') || null
  } as AuthState);

  const login = async (token: string) => {
    dispatch({
      type: types.LOGIN,
      payload: { token }
    });
  };


  const logout = () => {
    dispatch({
      type: types.LOGOUT
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };