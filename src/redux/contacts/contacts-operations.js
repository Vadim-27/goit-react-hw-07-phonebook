import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../components/ContactsApi/ContactsApi"

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetch-all",
    async (_, thunkAPI) => {
        try {
                const  data  = await api.getAllContacts();
        return data;
        } catch ({ response }) {
            return thunkAPI.rejectWithValue(response.data);
        }
        
        
    }
)

export const fetchAddContacts = createAsyncThunk(
    "contacts/add",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.addContacts(data);
            return result;
        } catch ({ response }) {
            return rejectWithValue(response.data)
        }
    }
)
export const fetchDeleteContacts = createAsyncThunk(
    "contacts/delete",
    async (id, { rejectWithValue }) => {
        try {
            await api.deleteContacts(id);
            return id;
        } catch ({ response }) {
            return rejectWithValue(response.data)
        }
    }
)