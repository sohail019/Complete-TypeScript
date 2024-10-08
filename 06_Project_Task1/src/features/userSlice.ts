import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string,
    email: string,
    username: string,
    password: string,
    role: string
}

interface UserState {
    users: User[],
    currentUser: User | null //? To track the logged in user
}

const initialState: UserState = {
    users: [], //? Store registred user here
    currentUser: null //? Logged in user
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        //? Register new user
        registerUser: (state, action: PayloadAction<User>) => {
            //? Add new user to the users array
            state.users.push(action.payload)
        },

        //? Login User
        loginUser: (state, action:PayloadAction<{email: string; password: string}>) => {
            const user = state.users.find(
                (u) => u.email === action.payload.email && u.password === action.payload.password
            )

            if(user){
                state.currentUser = user
            } else{
                alert("Invalid Credentials")
            }
        },

        //? Logout User
        logoutUser: (state) => {
            state.currentUser = null //? Remove the logged in user
        }

    }
})

export const {registerUser, loginUser, logoutUser} = userSlice.actions
export default userSlice.reducer