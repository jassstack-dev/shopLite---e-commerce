import { axiosInstance } from "../../../app/config/axiosInstance"

export const productApis =async ()=>{
    try {

        const res = await axiosInstance.get('/products?limit=194')
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

export const paginationFilter = async (limit , skip ) => {
  const res = await axiosInstance.get(
    `/products?limit=${limit}&skip=${skip}`
  );

  return res.data;
};