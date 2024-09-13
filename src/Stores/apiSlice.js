import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const authApi= createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({ baseUrl:'https://api.example.com'}),
    endpoints:(builder)=>({
    getsProduct:builder.query({
        query: () => 'products',
    })
    })
})

export const {useGetProductQuery} = authApi