import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Heart,
  Truck,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { useProductDetails } from "../../hooks/useProductDetails";

const ProductDetails = () => {
  const {
    product,
    notFound,
    activeImg,
    setActiveImg,
    navigate,
    isAdded,
    addCart,
    originalPrice,
    galleryImages,
  } = useProductDetails();

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-3 text-neutral-500">Product Not Found</p>
        <button
          onClick={() => navigate("/")}
          className="mt-5 px-6 py-2 bg-black text-white rounded-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <section className="bg-white px-10 py-8 text-neutral-900">
      {/* Breadcrumb */}
      <div className="text-[11px] text-neutral-400 mb-6 flex items-center gap-1.5 capitalize">
        <span>Home</span>
        <span>/</span>
        <span>{product.category}</span>
        <span>/</span>
        <span>{product.brand}</span>
        <span>/</span>
        <span className="text-neutral-700 font-medium">{product.title}</span>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Main Image + Thumbnails (7 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {/* Main Showcase Box */}
          <div className="relative aspect-[4/4.2] w-full bg-[#EDEDED] rounded-xl overflow-hidden flex items-center justify-center p-8">
            <img
              src={galleryImages[activeImg] || product.thumbnail}
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />

            {/* Top-Right Zoom Icon */}
            <button
              type="button"
              className="absolute top-4 right-4 text-neutral-700 hover:text-black cursor-pointer"
            >
              <Search className="w-4 h-4 stroke-[1.75]" />
            </button>

            {/* Left & Right Slider Arrows */}
            <button
              type="button"
              onClick={() =>
                setActiveImg((prev) =>
                  prev === 0 ? galleryImages.length - 1 : prev - 1,
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-white/90 hover:bg-white flex items-center justify-center shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-neutral-800 stroke-[1.75]" />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveImg((prev) =>
                  prev === galleryImages.length - 1 ? 0 : prev + 1,
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-white/90 hover:bg-white flex items-center justify-center shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 text-neutral-800 stroke-[1.75]" />
            </button>
          </div>

          {/* Thumbnail Row */}
          <div className="grid grid-cols-4 gap-3">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImg(index)}
                className={`aspect-square bg-[#EDEDED] rounded-lg overflow-hidden p-2 border transition-all cursor-pointer ${
                  activeImg === index
                    ? "border-neutral-900"
                    : "border-transparent opacity-75 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info, CTA, Specs & Reviews (6 cols) */}
        <div className="lg:col-span-6 flex flex-col pt-1">
          {/* Brand & Availability Tag */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
              {product.brand}
            </span>
            <span className="text-[11px] px-2 py-0.5 bg-neutral-100 text-neutral-800 font-medium rounded">
              {product.availabilityStatus} ({product.stock})
            </span>
          </div>

          {/* Product Title */}
          <h1 className="text-3xl sm:text-[34px] font-bold text-neutral-900 leading-tight tracking-tight">
            {product.title}
          </h1>

          {/* Tags / Variants + Shipping & Warranty Links */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                TAGS & SKU:{" "}
                <span className="text-neutral-800">{product.sku}</span>
              </p>
              <div className="flex items-center gap-2">
                {product.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-[11px] font-medium uppercase border border-neutral-300 text-neutral-800 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-5 text-[11px] font-semibold text-neutral-800">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 stroke-[1.75]" />
                <span className="underline underline-offset-4">
                  {product.warrantyInformation}
                </span>
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 stroke-[1.75]" />
                <span className="underline underline-offset-4">
                  {product.shippingInformation}
                </span>
              </span>
            </div>
          </div>

          {/* Price Row (Strikethrough Original + Current Price) */}
          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-lg text-neutral-400 line-through font-medium">
              $ {originalPrice}
            </span>
            <span className="text-2xl font-bold text-neutral-900">
              $ {product.price}
            </span>
            <span className="text-[11px] font-semibold text-red-500">
              (-{product.discountPercentage}%)
            </span>
          </div>

          {/* Add to Cart Pill Button + Heart Icon */}
          <div className="mt-6 flex items-center gap-3">
            {isAdded ? (
              <button
                onClick={() => navigate("/products/cart")}
                type="button"
                className="flex-1 bg-[#E54D3D] hover:bg-[#d64131] text-white text-[12px] font-semibold uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors cursor-pointer"
              >
                go to Cart
              </button>
            ) : (
              <button
                onClick={addCart}
                type="button"
                className="flex-1 bg-[#E54D3D] hover:bg-[#d64131] text-white text-[12px] font-semibold uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors cursor-pointer"
              >
                Add to Cart
              </button>
            )}
            <button
              type="button"
              className="w-11 h-11 rounded-lg border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-neutral-800 transition-colors cursor-pointer"
            >
              <Heart className="w-4 h-4 stroke-[1.75]" />
            </button>
          </div>

          {/* Information Accordion Section */}
          <div className="mt-8 border-t border-neutral-200 pt-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-neutral-900">
                Information
              </h2>
              <X className="w-3.5 h-3.5 text-neutral-500" />
            </div>

            <p className="text-[12.5px] text-neutral-600 leading-relaxed">
              {product.description}
            </p>

            {/* Bullet Specs from DummyJSON Fields */}
            <ul className="mt-3.5 space-y-1.5 text-[12px] text-neutral-700 list-disc pl-4">
              <li>
                Category: <span className="capitalize">{product.category}</span>{" "}
                — Brand: {product.brand}
              </li>
              <li>
                Dimensions: {product.dimensions?.width}W ×{" "}
                {product.dimensions?.height}H × {product.dimensions?.depth}D cm
              </li>
              <li>
                Minimum Order Quantity: {product.minimumOrderQuantity} units
              </li>
              <li>Return Policy: {product.returnPolicy}</li>
            </ul>
          </div>

          {/* Reviews Section */}
          <div className="mt-6 border-t border-neutral-200 pt-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-neutral-900">Reviews</h2>
                <span className="text-[11px] text-neutral-500">
                  ({product.rating} / 5)
                </span>
              </div>
              <X className="w-3.5 h-3.5 text-neutral-500" />
            </div>

            <div className="space-y-4">
              {product.reviews?.map((rev, idx) => (
                <div
                  key={idx}
                  className="pb-3 border-b border-neutral-100 last:border-b-0"
                >
                  <div className="flex items-center gap-8 mb-1.5">
                    <span className="text-[12.5px] font-bold text-neutral-900">
                      {rev.reviewerName}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className={`w-3.5 h-3.5 ${
                            starIdx < rev.rating
                              ? "fill-[#E54D3D] text-[#E54D3D]"
                              : "fill-neutral-200 text-neutral-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[12px] text-neutral-600 leading-relaxed">
                    {rev.comment}
                  </p>
                  <p className="text-[10.5px] text-neutral-400 text-right mt-1">
                    {new Date(rev.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
