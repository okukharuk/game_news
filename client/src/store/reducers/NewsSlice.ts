import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INewsQuery } from '../../models/INewsQuery';
import { TSlug } from '../../models/TSlug';

export const initialState: INewsQuery = {
  slug: "counterstrike",
  type: "publishAtDesc",
  from: undefined,
  to: undefined,
  page: 1,
};

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    update_slug(state, action: PayloadAction<TSlug>) {
      state.slug = action.payload;
    },
    update_type(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    update_from(state, action: PayloadAction<string>) {
      state.from = action.payload;
    },
    update_to(state, action: PayloadAction<string>) {
      state.to = action.payload;
    },
    update_page(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export default NewsSlice.reducer;
