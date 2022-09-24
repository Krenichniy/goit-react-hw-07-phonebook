import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contactSlice = createSlice({
    name: 'items', 
    initialState: [
    { id: 0, name: 'Rosie Simpson', tel: '459-12-56' },
    { id: 1, name: 'Hermione Kline', tel: '443-89-12' },
    { id: 2, name: "Master React", tel: '645-17-79' },
    { id: 3, name: 'Eden Clements', tel: '227-91-26' },],
    reducers: {
        addContact: {
            reducer: (store, { payload }) => [...store, payload],
            prepare: contact => ({ payload: { ...contact, id: nanoid(10) } }),
        }, 
        removeContact: (store, { payload }) =>
            store.filter(userTel=> userTel.id !== payload),
    }
})



export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
