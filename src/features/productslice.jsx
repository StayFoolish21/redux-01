import {createSlice,createAsyncThunk,createEntityAdapter} from "@reduxjs/toolkit"
import axios from "axios"

export const getProduct = createAsyncThunk("products/getProducts", async() => {
    const response = await axios.get("http://localhost:3000/product");
    return response.data;

})

export const saveProduct = createAsyncThunk("products/saveProduct", async({title,price}) => {
    const response = await axios.post ("http://localhost:3000/product",
    { title,price

    });
    return response.data;
})


const productEntity = createEntityAdapter ({
    selectId: (product) => product.id
});


const productSlice = createSlice({
    name: "product",
    initialState: productEntity.getInitialState(),
    extraReducers: (builder) => {
        builder
        .addCase(getProduct.fulfilled, (state, action) => {
            productEntity.setAll(state, action.payload);
        })
        .addCase(saveProduct.fulfilled, (state, action) => {
            productEntity.addOne(state, action.payload)
        })
    }

 
});

export const productSelector = productEntity.getSelectors(state => state.product)
export default productSlice.reducer; 
