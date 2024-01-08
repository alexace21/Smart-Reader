import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// API

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        // API endpoint
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    // builder helps to build the call
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})
    // Redux toolkit Automatically create hook upon export
    // use Lazy for on-demand firing
export const { useLazyGetSummaryQuery } = articleApi
