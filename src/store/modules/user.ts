import { login } from "@/api/user";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: 'user',
    initialState: {
        name: '',
        loginCaptcha: ''
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload
        },
        setLoginCaptcha(state, action) {
            state.loginCaptcha = action.payload
        }
    }
})

const fetchName = () => {
    return (dispatch: any) => {
        fetch('http://localhost:3001/user/login').then(response => {  
            if (!response.ok) {  
              throw new Error('Network response was not ok');  
            }  
            return response.json()
          })  
          .then(data => { 
              dispatch(setName(data.data))
          })  
          .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);  
          });
    }
}
const loginSystem = (loginFormData: object) => {
    return (dispatch: any) => {
        login({})
        .then((res:res)=> { 
             console.log(res)
          })  
          .catch((_: any) => {})
    }
}

const { setName, setLoginCaptcha } = userStore.actions
export { loginSystem, fetchName, setName, setLoginCaptcha }
export default userStore.reducer