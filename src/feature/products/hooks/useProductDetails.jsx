import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addToCart } from "../../carts/store/cartSlice";
import { axiosInstance } from "../../../app/config/axiosInstance";

export const useProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);
  console.log(notFound);

  console.log('products in hooks --->',product)

  const [activeImg, setActiveImg] = useState(0);

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  //   console.log(cartItems)

  const isAdded = product
    ? cartItems.some((items) => {
        return items.id === product.id;
      })
    : false;

  const dispatch = useDispatch();

  const getProductDetails = async () => {
    try {
      setNotFound(false);

      if (!id) {
        setNotFound(true);
        return;
      }

      const response = await axiosInstance.get(`/products/${id}`);

      console.log(response.data);
      setProduct(response.data);
      setActiveImg(0);
    } catch (error) {
      console.log("error in the product detail api", error);
      if (error.response?.status === 404) {
        setNotFound(true);
      }
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  

  const addCart = () => {
    dispatch(addToCart(product));
  };

  // Original price calculation from discountPercentage
 const originalPrice = product
    ? (
        product.price /
        (1 - product.discountPercentage / 100)
      ).toFixed(2)
    : null;

  // Gallery images fallback so thumbnails always render cleanly
  const galleryImages = product
    ? product.images?.length > 0
        ? product.images
        : [product.thumbnail]
    : [];

  return {
    id,
    product,
    setProduct,
    notFound,
    setNotFound,
    activeImg,
    setActiveImg,
    navigate,
    cartItems,
     addCart,
     isAdded,
     originalPrice ,
     galleryImages

  };
};
