import React, { useState } from 'react';

export const AuthContext = React.createContext({authenticated: false, login: ()=>{}});



const getAuthStatus = (props) => {
  const [authenticated, setAuthenticated] = useState();

   const loginHandler = () => {
     setAuthenticated(true);
   }

   return (
      <AuthContext.Provider value={{authenticated:authenticated, login: loginHandler}}>
        {props.children}
      </AuthContext.Provider>
   )
}


export default getAuthStatus;