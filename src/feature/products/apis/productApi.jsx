import { useState } from "react"
import { axiosInstance } from "../../../app/config/axiosInstance"

export const productApis =async (limit, pages)=>{

    try {
        const res = await axiosInstance.get(`/products?limit=${limit}&skip=${pages * limit}`)
        return res.data
    } catch (error) {
        console.log('error in product api is', error)
    }
}


export const filterByCategoryApis =async ()=>{
    try {

        const res = await axiosInstance.get('/products/categories')
        return res.data
    } catch (error) {
        console.log('error in product api is', error)
    }
}

