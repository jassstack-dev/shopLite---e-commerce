import { useQuery } from "@tanstack/react-query"
import { productApis } from "../apis/productApi"

export const useProductApi = ()=>{

    const {data , isPending, error} = useQuery({
        queryKey: ['products'],
        queryFn: productApis,
        staleTime: 10 * 1000, // 10 seconds
    })


    return {
        data, isPending, error
    }

  

}