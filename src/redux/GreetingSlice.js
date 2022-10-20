import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://127.0.0.1:3000/api/v1/contents';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  },
);

const initialState = [];
const greetingSlice = createSlice({
  name: 'Greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => action.payload,
  },
});

export default greetingSlice.reducer;
