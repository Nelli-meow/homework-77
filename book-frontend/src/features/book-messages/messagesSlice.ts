import { createSlice } from '@reduxjs/toolkit';
import { addMessagesThunk, fetchMessagesThunk } from './messagesThunk.ts';
import { RootState } from '../../app/store.ts';
import { IMessage } from '../../types';

interface IMessageInitialState {
  messagesItems: IMessage[];
  fetchingMessages: boolean;
  createMessage: boolean;
}

const initialState: IMessageInitialState = {
  messagesItems: [],
  fetchingMessages: false,
  createMessage: false,
}

export const selectMessagesItem = (state: RootState) => state.bookMessages.messagesItems;
export const selectFetchingMessages = (state: RootState) => state.bookMessages.fetchingMessages;

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessagesThunk.pending, (state: IMessageInitialState) => {
        state.fetchingMessages = true;
      })
      .addCase(fetchMessagesThunk.fulfilled, (state, {payload: messages}) => {
        state.fetchingMessages = false;
        state.messagesItems = messages;
      })
      .addCase(fetchMessagesThunk.rejected, (state) => {
        state.fetchingMessages = false;
      })

      .addCase(addMessagesThunk.pending, (state) => {
        state.createMessage = true;
      })
      .addCase(addMessagesThunk.fulfilled, (state) => {
        state.createMessage = false;
      })
      .addCase(addMessagesThunk.rejected, (state) => {
        state.createMessage = false;
      });
    }
});



export const messagesReducer = messagesSlice.reducer;