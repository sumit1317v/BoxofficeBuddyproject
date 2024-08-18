// import { createSlice } from "@reduxjs/toolkit"

// export const loggedSlice = createSlice({
//     name: "logged",
//     initialState: {
//         loggedIn: false
//     },
//     reducers: {
//         login: (state) => { console.log("in login action"); return { loggedIn: true } },

//         logout: (state) => { console.log("in logout action"); return { loggedIn: false } },
//     }
// })
// export const { login, logout } = loggedSlice.actions
// export default loggedSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name: "logged",
    initialState: {
        loggedIn: false,
        userRole: null, // Add userRole to the state
    },
    reducers: {
        login: (state, action) => {
            console.log("in login action");
            return { 
                loggedIn: true,
                userRole: action.payload.roleId // Set userRole from action payload
            };
        },
        logout: (state) => {
            console.log("in logout action");
            return { 
                loggedIn: false,
                userRole: null // Clear userRole on logout
            };
        },
    }
});

export const { login, logout } = loggedSlice.actions;
export default loggedSlice.reducer;

