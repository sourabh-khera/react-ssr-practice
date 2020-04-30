import React , { Component } from 'react';
import TextInput from '../components/Text_Input/Text_Input';
import LoginButton from '../components/Button/Button';
import classes from './Login.css';

class Login extends Component {
  render() {
    return (
      <div className={classes.login_container}>
        <div className={classes.login_inputs_container}> 
          <div className={classes.title}>Login</div>
          <div className={classes.text_input_container}>
            <TextInput placeholder='Username'/>             
            <TextInput placeholder='Password'/>               
          </div>
          <div className={classes.login_button_container}>
            <LoginButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;