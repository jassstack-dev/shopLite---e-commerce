import { Search, ChevronDown } from "lucide-react";


const Filter = ({
  filteredData,
  setSearch,
  search,
  selectedCategory,
  setSelectedCategory,
  CategoriesData,
  sortBy,
  setSortBy
  
}) => {


  

  return (
    <div className="bg-white  py-10 flex justify-between items-center text-neutral-900">
      {/* Left: Filter by Search & Category */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="relative flex items-center">
          <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3.5 pointer-events-none stroke-[1.75]" />
          <input
            type="text"
            value={search}
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 text-[12px] text-neutral-800 placeholder:text-neutral-400 bg-white border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors w-60"
          />
        </div>

        {/* Category Selector */}
        <div className="relative flex items-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none bg-white border border-neutral-200 hover:border-neutral-400 focus:border-neutral-900 focus:outline-none px-4 py-2 pr-9 text-[12px] font-medium text-neutral-800 cursor-pointer transition-colors"
          >
            <option value="all">All Categories</option>
            {CategoriesData?.map((val) => {
              return (
                <option key={val.slug} value={val.slug}>
                  {val.name}
                </option>
              );
            })}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-3 pointer-events-none stroke-[1.75]" />
        </div>
      </div>

      {/* Right: Sort */}
      <div className="relative flex items-center">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="appearance-none bg-white border border-neutral-200 hover:border-neutral-400 focus:border-neutral-900 focus:outline-none px-4 py-2 pr-9 text-[12px] font-medium text-neutral-800 cursor-pointer transition-colors"
        >
          <option value="featured">Sort by: Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
        <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-3 pointer-events-none stroke-[1.75]" />
      </div>
    </div>
  );
};

export default Filter;
