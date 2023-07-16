import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  email: string;
  resume: string;
  notes: string;
  service: string;
  paid: boolean;
  triedSubmit: boolean;
}

const initialState: FormState = {
  email: '',
  resume: '',
  notes: '',
  service: 'basic',
  paid: false,
  triedSubmit: false,
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
    setService: (state, action: PayloadAction<string>) => {
      state.service = action.payload;
    },
    setPaid: (state, action: PayloadAction<boolean>) => {
      state.paid = action.payload;
    },
    setTriedSubmit: (state, action: PayloadAction<boolean>) => {
      state.triedSubmit = action.payload;
    }
  },
});

export const { setEmail, setResume, setNotes, setService, setPaid, setTriedSubmit } = formSlice.actions;

export default formSlice.reducer;
