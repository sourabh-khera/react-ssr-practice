import React, { Component, useContext } from 'react';
import AppInfo from './containers/AppInfo';
import Login from './containers/Login';
import { AuthContext } from './hoc/auth_context';

const App = () => {
  const context = useContext(AuthContext);
  const renderComponent = context.authenticated ? <AppInfo /> : <Login />
  return renderComponent;
}
export default App;