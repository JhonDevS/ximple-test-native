import {Credit} from '../../interfaces/Credit';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CreditsState {
  loading: boolean;
  error: string | null;
  data: Credit[];
}

const initialState: CreditsState = {
  loading: false,
  error: null,
  data: [],
};

export const creditsSlice = createSlice({
  name: 'credits',
  initialState,
  reducers: {
    saveSelectedCredit: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchCreditsRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchCreditsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchCreditsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCreditsRequest,
  fetchCreditsSuccess,
  fetchCreditsFailure,
  saveSelectedCredit,
} = creditsSlice.actions;

export default creditsSlice.reducer;
