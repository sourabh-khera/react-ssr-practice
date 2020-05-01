import { saveUsersList } from './action';
import axios from 'axios';

export const getUsers = () => async dispatch => {
  const URL = 'https://jsonplaceholder.typicode.com/users'; 
	try { 
		const response = await axios(URL, { 
			method: 'get', 
			headers: { 'Content-Type': 'application/json' }, 
    }); 
    dispatch(saveUsersList(response.data))
	} catch (error) { 
		console.log(error, "------") 
	}
}