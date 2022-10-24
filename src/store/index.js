import { configureStore } from '@reduxjs/toolkit';
import Form from './slices/form';
export const store = configureStore({
  reducer: {
    form:Form.reducer
  },
})
