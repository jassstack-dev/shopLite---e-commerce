import { useEffect, useState } from "react"
import { useProductApi } from "../../feature/products/hooks/useProductApi"
import { filterByCategoryApis } from "../../feature/products/apis/productApi"
import { useQuery } from "@tanstack/react-query"

export const useSearchFilter = ()=>{
    
     const {data} = useProductApi()


    //  console.log('all products --->', data.products)

  const [search, setSearch] = useState('')
  const [debouncing, setDebouncing] = useState('')
   const [selectedCategory, setSelectedCategory] = useState("all");
   const [sortBy, setSortBy] = useState('featured')
   console.log(sortBy)


  

    useEffect(()=>{
      const timer = setTimeout(()=>{
        setDebouncing(search)
        // console.log('debouncing searcg', search)
      }, 500)

      return ()=>{
        clearTimeout(timer)
      }
    }, [search])

      const filteredData = data?.products?.filter((product) => {

  const matchesSearch = product.title
    .toLowerCase()
    .includes(debouncing.trim().toLowerCase());

  const matchesCategory =
    selectedCategory === "all" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
})?.sort((a,b)=>{
    if(sortBy === 'low-high'){
        return a.price - b.price
    }
     if (sortBy === "price-high") {
      return b.price - a.price;
    }

    if (sortBy === "newest") {
      return b.id - a.id;
    }
    
    return 0
}) ?? []

   

    
  
    const {data:CategoriesData, isPending , error} = useQuery({
        queryKey:['categories'],
        queryFn: filterByCategoryApis,
        staleTime: 10000
    })

console.log("Products received:", filteredData);


    return {
        search, setSearch, filteredData, selectedCategory,setSelectedCategory, CategoriesData,  sortBy,
  setSortBy
    }

}