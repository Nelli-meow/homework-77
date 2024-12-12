import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMessage, IMessageMutation,  } from '../../types';
import axiosApi from '../../axiosApi.ts';


export const fetchMessagesThunk = createAsyncThunk<IMessage[], void>(
  'book-messages/fetchMessagesThunk',
  async () => {
    const messagesResponse = await axiosApi<IMessage[]>('/book-messages');
    return messagesResponse.data || [];
  }
);

export const addMessagesThunk = createAsyncThunk<void, IMessageMutation>(
  'book-messages/addMessagesThunk',
  async (IMessageMutation) => {
    const formData = new FormData();

    const keys = Object.keys(IMessageMutation) as (keyof IMessageMutation)[];

    keys.forEach(key => {
      const value = IMessageMutation[key];

      if(value !== null) {
        formData.append(key, value);
      }
    })

     await axiosApi.post('/book-messages', formData);
  }
);