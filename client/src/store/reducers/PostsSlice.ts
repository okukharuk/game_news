import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INews } from '../../models/INews';
import { INewsPosts } from '../../models/INewsPosts';

export const initialState: INewsPosts = {
  posts: [],
};

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    update_posts(state, action: PayloadAction<INews[]>) {
      state.posts = [...state.posts, ...action.payload];
    },
    reset_posts(state) {
      state.posts = [];
    },
  },
});

export default PostsSlice.reducer;
