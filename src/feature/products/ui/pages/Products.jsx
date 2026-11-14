
import { Opacity } from 'lucide-react';
import { axiosInstance } from '../../../../app/config/axiosInstance';
import { useProductApi } from '../../hooks/useProductApi';
import { useEffect, useState } from 'react';

const Products = ({ filteredData }) => {
  const { data,isPending, error, setPages, pages, totalPages,isPlaceholderData  } = useProductApi();

  if(isPending) return <h1>loading data...</h1>
    if(error) return <h1>something went wrong...</h1>



  const products = filteredData ?? data?.products ?? [];








  return (
    <section className="bg-white px-10 py-6 text-neutral-900">
      <div
      style={{opacity: isPlaceholderData ? 0.3 : 1}}
       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/4.6] w-full bg-[#EDEDED] overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
            </div>

            {/* Product Details */}
            <div className="pt-3.5 flex flex-col">
              <h3 className="text-[13px] font-semibold text-neutral-900 leading-snug">
                {product.title}
              </h3>

              <p className="text-[11.5px] text-neutral-400 mt-0.5">
                {product.brand}
              </p>

              <p className="text-[12.5px] font-medium text-neutral-900 mt-2">
                ${product.price}
              </p>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <p className="col-span-full text-center py-10">
            No products found.
          </p>
        )}

      </div>
      <div className="flex justify-center gap-10 mt-10 items-center">
  <button
    disabled={pages === 0}
    onClick={() => setPages(pages - 1)}
    className="bg-red-700 text-white p-4 rounded-xl disabled:opacity-40"
  >
    Prev
  </button>

  <p>Page {pages + 1} of {totalPages}</p>

  <button
    disabled={pages + 1 >= totalPages}
    onClick={() => setPages(pages + 1)}
    className="bg-red-700 text-white p-4 rounded-xl disabled:opacity-40"
  >
    Next
  </button>
</div>
      
    </section>
  );
};

export default Products;
