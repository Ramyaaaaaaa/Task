import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export interface Request{
    current: number;
    pageSize: number;
}
export const Api = createApi({
    reducerPath: "tabledata",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.punkapi.com/v2" }),
    endpoints:(builder) => ({
        TableData: builder.query<any, Request>({
            query: ({current,pageSize}) => `/beers?page=${current}&per_page=${pageSize}`
        }) 
    })
})

export const { useTableDataQuery } = Api;