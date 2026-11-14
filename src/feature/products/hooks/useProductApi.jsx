import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { productApis } from "../apis/productApi"
import { useState } from "react";

export const useProductApi = ()=>{

    const limit = 10;
    const [pages, setPages] = useState(0)

    const {data , isPending, error, isPlaceholderData} = useQuery({
        queryKey: ['products', pages],
        queryFn: ()=>productApis(limit, pages),
        staleTime: 10 * 1000, // 10 seconds,
        placeholderData:keepPreviousData
    })

    if(isPending) return <h1>loading data...</h1>
    if(error) return <h1>something went wrong...</h1>

    const totalPages = Math.ceil((data.total)/limit)
    console.log(totalPages)



    return {
        data, isPending, error , setPages, pages, totalPages, isPlaceholderData
    }

  

} 