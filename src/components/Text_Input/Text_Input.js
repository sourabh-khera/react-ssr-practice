import React from 'react';
import classes from './Text_Input.css';

const textInput  = ({placeholder}) => {
 return (
   <div>
     <input 
       type='text' 
       maxLength='30' 
       placeholder={placeholder}
       onChange={()=>{}}
       className={classes.text_input}
      />
   </div>
 )
};

export default textInput;