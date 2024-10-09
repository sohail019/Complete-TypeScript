import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string,
    email: string,
    username: string,
    password: string,
    role: "Admin" | "Regular User"
}

interface UserState {
    users: User[],
    currentUser: User | null, //? To track the logged in user
    loading: boolean,
    error: string | null 
}

const initialState: UserState = {
    users: [], //? Store registred user here
    currentUser: null, //? Logged in user
    loading: false,
    error: null
}


//* Async Thunk for Logging in

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async(
        {email, password}: {email:string; password: string},
        {getState, rejectWithValue}
    ) => {
        const state = getState() as {user: UserState} // Get the current state
        const user = state.user.users.find(
            (u) => u.email === email && u.password === password
        )

        if(!user) {
            return rejectWithValue("Invalid Credentials")
        }
        return user //? Return user data on Successful login
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        //? Register new user
        registerUser: (state, action: PayloadAction<User>) => {
            //? Add new user to the users array
            state.users.push(action.payload)
        },
        //? Logout User
        logoutUser: (state) => {
            state.currentUser = null //? Remove the logged in user
        },

        //? Set users from API for Admin Dashboard
        setUser: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload
        },

        //? Update User Details
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex((user) => user.id === action.payload.id)
            if(index !== -1) {
                state.users[index] = action.payload
                if(state.currentUser && state.currentUser.id === action.payload.id) {
                    state.currentUser = action.payload
                }
            }
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true //? Set loading state
            state.error = null //? Clear previous errors
        })
        .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.loading = false //? Reset loading
            state.currentUser = action.payload //? Set current user on successul login
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false //? Reset loading
            state.error = action.payload as string //? Set error
        })
    }
})

export const {registerUser, logoutUser, setUser, updateUser} = userSlice.actions
export default userSlice.reducer