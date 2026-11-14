
import { useProductApi } from '../../hooks/useProductApi';
import { useQuery } from '@tanstack/react-query';
import { paginationFilter } from '../../apis/productApi';

const Products = ({ filteredData }) => {
  const { data, isPending, isError, error } = useProductApi();

  if (isPending) return <h1>Loading data...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  const products = filteredData ?? data?.products ?? [];





  return (
    <section className="bg-white px-10 py-6 text-neutral-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

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
    </section>
  );
};

export default Products;
