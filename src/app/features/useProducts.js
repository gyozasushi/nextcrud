import { axiosInstance } from "../lib/axios";
import  { useState, useEffect } from "react" ;
import {useQuery} from "@tanstack/react-query"

export const useProducts = () => {
    return useQuery({
        queryFn: async()=> {
            const productsReponse = await axiosInstance.get("/products");

            return productsReponse;
        }
    });
};  