import React from 'react'
import {createContext,useState,useEffect} from 'react'
import {getLocalStorage,setLocalStorage} from '../Utils/localStorage'


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState({
    employees: [],
    admin: []
  });

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const { employees, admin } = getLocalStorage();

    setUserData({
      employees: employees || [],
      admin: admin || []
    });

  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};