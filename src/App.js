import React, { useState, useEffect } from 'react'
import UserContext from './Context'
import getCookie from './utils/cookie'

const App = (props) => {

  const [user, setUser] = useState(props.user ? {
    ...props.user,
    loggedIn: true
  } : null);
  const articles = props.articles || [];
  
  const logIn = (userObject) => {
    setUser({
      ...userObject,
      loggedIn: true
    })
  };

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    setUser({
      loggedIn: false
    })
  };
  
  console.log('user', user);

  return (
    <UserContext.Provider value={{
      user,
      logIn,
      logOut,
      articles
    }}>
      {props.children}
    </UserContext.Provider>
  )
};

export default App