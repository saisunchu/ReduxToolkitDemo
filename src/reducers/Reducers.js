import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const reducersSlice = createSlice({
  name: 'reducers',
  initialState: {
    name: '',
    name2: '',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setName2(state, action) {
      state.name2 = action.payload;
    },
  },
});

export const {setName, setName2} = reducersSlice.actions;
export default reducersSlice.reducer;
