import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const fetchContacts = createAsyncThunk('contacts/fetch',
    async (_, thunkAPI) => {
        try {
            const data = await api.fetchAllContacts();
            return data
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });

function checkIfContactExist(newContact, contacts) {
        return Object.keys(newContact).find(key => {
            const subString = newContact[key].toLocaleUpperCase();
            const contact = contacts.find(el => el[key].toLocaleUpperCase().includes(subString));
            if (contact) return !Notify.warning(`${contact[key]} is already in contacts`);
            else return false
        })
}

export const addContact = createAsyncThunk('contacts/add',
    async (data, thunkAPI) => {
        try {
            const result = await api.addNewContact(data);
            return result;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
    {
        condition: (newContact, { getState }) => {
            const { contacts } = getState();

            if (checkIfContactExist(newContact, contacts.items)) {
                return false;
            }
        }
    }
); 

export const removeContact = createAsyncThunk('contacts/remove',
    async (id, thunkAPI) => {
        try {
            return id;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
