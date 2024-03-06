import React, { createContext, useContext, useState } from 'react';

interface IUser {
  userId: string;
  username: string;
}

interface IUserContext {
  user_c: {
    userId: string;
    username: string;
  };
  // setUser_c: any;
  // | React.Dispatch<
  //     React.SetStateAction<{
  //       userId: string;
  //       username: string;
  //     }>
  //   >
  // | string;
  setUser_cl: any;
}

const UserContext = createContext<IUserContext>({
  user_c: {
    userId: '',
    username: ''
  },
  // setUser_c: '',
  setUser_cl: ''
});

export function useUser(): IUserContext {
  return useContext(UserContext);
}

interface IApp {
  children: React.ReactNode;
}

export function UserContextProvider({ children }: IApp) {
  const [user_c, setUser_c] = useState({
    userId: '',
    username: ''
  });

  function setUser_cl(_user: IUser) {
    setUser_c(_user);
  }

  return (
    <UserContext.Provider
      value={{
        user_c,
        setUser_cl
      }}>
      {children}
    </UserContext.Provider>
  );
}
