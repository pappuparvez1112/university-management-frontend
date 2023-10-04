import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaeUrl } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaeUrl() }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
