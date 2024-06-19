import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: 'user',
    initialState: {
        name: ''
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload
        }
    }
})

const fetchName = () => {
    return (dispatch) => {
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

const { setName } = userStore.actions
export { fetchName, setName }
export default userStore.reducer