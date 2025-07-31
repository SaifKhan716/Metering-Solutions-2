
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersByQuery, updateUserById, createUser, deleteUserById } from '../thunks/userManagementThunks';

const userMangementSlice = createSlice({
    name: "usersMangement",
    initialState: {
        data: [], // For fetchUsers
        fetchUsersByQueryData: [], // For filtered user query
        loading: false,
        error: null,
        search: "",
        selectedUser: null,
    },
    reducers: {

        setSelectedUser(state, action) {
            state.selectedUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Query-based Fetch
            .addCase(fetchUsersByQuery.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsersByQuery.fulfilled, (state, action) => {
                state.loading = false;
                state.fetchUsersByQueryData = action.payload;
            })
            .addCase(fetchUsersByQuery.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch users by query";
            })

            // Update User
            .addCase(updateUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUserById.fulfilled, (state, action) => {
                state.loading = false;
                const updatedUser = action.payload;

                // Update user in fetchUsersByQueryData if present
                const index = state.fetchUsersByQueryData.findIndex(
                    (user) => user._id === updatedUser._id
                );
                if (index !== -1) {
                    state.fetchUsersByQueryData[index] = updatedUser;
                }

            })
            .addCase(updateUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to update user";
            })

            // for user creating
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                const newUser = action.payload;

                // Push to state arrays if needed
                state.data.push(newUser);
                state.fetchUsersByQueryData.push(newUser);
               
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to create user";

          
            })

            .addCase(deleteUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUserById.fulfilled, (state, action) => {
                state.loading = false;
                const deletedUserId = action.payload.id;

                // Remove user from data arrays
                state.data = state.data.filter((user) => user._id !== deletedUserId);
                state.fetchUsersByQueryData = state.fetchUsersByQueryData.filter(
                    (user) => user._id !== deletedUserId
                );

            })
            .addCase(deleteUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to delete user";
            });
    },
});

export const { setUserSearch, setSelectedUser } = userMangementSlice.actions;
export const userAllData = (state)=> state.usersMangement.data;
export const userQueryData = (state)=> state.usersMangement.fetchUsersByQueryData;
export const userManagementLoading = (state)=> state.usersMangement.loading;
export const userManagementError = (state)=> state.usersMangement.error;
export const userManagementSelectedUser = (state)=> state.usersMangement.selectedUser;

export default userMangementSlice.reducer;