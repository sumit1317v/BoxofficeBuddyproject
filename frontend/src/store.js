import {configureStore} from '@reduxjs/toolkit';
import  loggedReducer  from './loggedSlice';
export default configureStore({
    reducer:{
        
        logged:loggedReducer  //logged is name of store
    }
})

