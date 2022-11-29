import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cats: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addCat: (state, action) => {
      state.quantity += 1;
      state.cats.push(action.payload);
      state.total += action.payload.price * action.payload.count;
    },
  },
});

export const { addCat } = cartSlice.actions;
export default cartSlice.reducer;
