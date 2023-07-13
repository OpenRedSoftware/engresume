import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  email: string;
  resume: string;
  notes: string;
  paid: boolean;
}

const initialState: FormState = {
  email: '',
  resume: '',
  notes: '',
  paid: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setResume: (state, action: PayloadAction<string>) => {
      state.resume = action.payload;
    },
    setNotes: (state, action: PayloadAction<string>) => {
      state.notes = action.payload;
    },
    setPaid: (state, action: PayloadAction<boolean>) => {
      state.paid = action.payload;
    },
  },
});

export const { setEmail, setResume, setNotes, setPaid } = formSlice.actions;

export default formSlice.reducer;
