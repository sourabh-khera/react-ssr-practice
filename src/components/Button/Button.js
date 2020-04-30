import React , { useContext } from 'react';
import { AuthContext } from '../../hoc/auth_context';
import classes from './Button.css';

const button = (props) => {
  const context = useContext(AuthContext);
 return (
   <div>
     <button onClick={context.login} className={classes.default_button_style}>Submit</button>
   </div>
 )
};

export default button;