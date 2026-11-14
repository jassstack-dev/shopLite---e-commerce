import Main from "../components/home/Main";
import Filter from "../components/home/Filter";
import Products from "../../../feature/products/ui/pages/Products";
import { useProductApi } from "../../../feature/products/hooks/useProductApi";
import { useEffect, useState } from "react";
import { useSearchFilter } from "../../hooks/searchFilter";

const Home = () => {
  const {
    data,
    search,
    setSearch,
    filteredData,
    selectedCategory,
    setSelectedCategory,
    CategoriesData,
    sortBy, setSortBy
  } = useSearchFilter();



  return (
    <div className="p-10">
      <Main />
      <Filter
        filteredData={filteredData}
        setSearch={setSearch}
        search={search}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        CategoriesData={CategoriesData}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Products data={data}  filteredData={filteredData} />
    </div>
  );
};

export default Home;
