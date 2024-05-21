import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseInit";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
//custom hooks
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
//   const navigate = useNavigate()
  useEffect(() => {
    //default auth provider and user information
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    //   navigate("/")
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={ user }>{children}</AuthContext.Provider>
  );
};