import React, { useState } from "react";
import { X, Truck, ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { decreaseQuantity, increaseQuantity, removeCartItem } from "../../store/cartSlice";
import EmptyCart from "../components/Emptycart";

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  // console.log(cartItems.length);
  console.log("CART-ITEMS-->", cartItems);



  const addQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const removeQuantity = (id) => {
    dispatch((decreaseQuantity(id)));
  };

  const removeItem = (id)=>{
    dispatch(removeCartItem(id))
  }

  const totalAmount = cartItems.reduce((sum, items)=>{
    return sum + items.price * items.quantity
  },0)





  const [closeCart, setCloseCart] = useState(false);

  if (closeCart === true) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end p-2 sm:p-3">
      {/* Slide-over White Cart Drawer */}
      <aside className="w-full max-w-[420px] bg-white rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden text-neutral-900">
        {/* Top Section: Header + Progress + Items + Upsell */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Header: Cart (3) + Close */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-[20px] font-semibold tracking-tight">Cart</h2>
              {
                cartItems.length === 0 ? <span></span> : <span className="w-5 h-5 rounded-full bg-neutral-900 text-white text-[11px] font-bold flex items-center justify-center">
                {cartItems.length}
              </span>
              }
            </div>
            <button
              onClick={() => setCloseCart(true)}
              type="button"
              className="p-1 text-neutral-700 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[1.75]" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          {/* <div className='mt-4'>
            <p className='text-[12px] font-medium text-neutral-800'>
              Shop $99.00 more for Free shipping
            </p>
            <div className='relative mt-2.5 flex items-center'>
              <div className='w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden'>
                <div className='w-1/3 h-full rounded-full bg-gradient-to-r from-[#8B4C39] to-[#D9A79C]' />
              </div>
              <span className='w-6 h-6 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center -ml-2 shrink-0'>
                <Truck className='w-3.5 h-3.5 stroke-[1.75]' />
              </span>
            </div>
          </div> */}

          {/* Cart Items List */}
          <div className="mt-6 space-y-5">
            {/* Item 1 */}
            {cartItems.length === 0 ? <EmptyCart setCloseCart={setCloseCart} /> : cartItems?.map((items) => {
              return (
                <div
                  key={items.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={items.images}
                      alt="Area Lo Sneaker"
                      className="w-16 h-18 rounded-md object-cover bg-[#EDEDED]"
                    />
                    <div>
                      <h3 className="text-[13.5px] font-semibold text-neutral-900">
                        {items.title}
                      </h3>
                      <p className="text-[12.5px] font-medium text-neutral-800 mt-0.5">
                        ${(items.price * items.quantity).toFixed(2)}
                      </p>
                      {/* <p className='text-[11px] text-neutral-400 mt-0.5'>
                    discount {items.discountPercentage}%
                  </p> */}
                    </div>
                  </div>

                  {/* Quantity Stepper + Remove */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-2.5 text-[12px] font-medium">
                      <button
                      onClick={()=>removeQuantity(items.id)}
                        type="button"
                        className="text-neutral-500 hover:text-black cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 h-6 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-900">
                        {items.quantity}
                      </span>
                      <button
                      onClick={()=>addQuantity(items.id)}
                        type="button"
                        className="text-neutral-500 hover:text-black cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                    onClick={()=>removeItem(items.id)}
                      type="button"
                      className="text-[11px] text-neutral-500 hover:text-neutral-900 underline underline-offset-2 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Customers Also Bought */}
          {
            cartItems.length === 0 ? <div></div> : <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[14px] font-semibold text-neutral-900">
                Customers Also Bought
              </h4>
              <div className="flex items-center gap-2 text-neutral-600">
                <button
                  type="button"
                  className="hover:text-black cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="hover:text-black cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Upsell Card */}
            <div className="bg-[#F7F7F7] rounded-xl p-2.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=160&q=80"
                  alt="Cleaning Kit"
                  className="w-12 h-13 rounded-md object-cover bg-[#EDEDED]"
                />
                <div>
                  <p className="text-[12.5px] font-semibold text-neutral-900">
                    Cleaning Kit
                  </p>
                  <p className="text-[11.5px] font-medium text-neutral-600 mt-0.5">
                    $25.00
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="bg-[#1C1C1C] hover:bg-black text-white text-[10.5px] font-semibold tracking-wider uppercase px-3.5 py-2 rounded-full flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Plus className="w-3 h-3 stroke-[2.5]" />
                ADD
              </button>
            </div>
          </div>
          }
        </div>

        {/* Sticky Bottom Footer: Total + Checkout + Payment Badges */}
        {
          cartItems.length === 0 ? <div></div> : <div className="border-t border-neutral-100 bg-white px-6 py-5">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-[17px] font-medium text-neutral-900">
              Total 
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-[19px] font-semibold text-neutral-900">
                ${totalAmount.toFixed(2)}
              </span>
             
            </div>
          </div>

          <button
          onClick={()=>navigate('/checkout')}
            type="button"
            className="w-full bg-[#1C1C1C] hover:bg-black text-white text-[12px] font-semibold uppercase tracking-widest py-3.5 rounded-full transition-colors cursor-pointer"
          >
            CHECKOUT
          </button>

          {/* Payment Method Badges */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5">
            <span className="px-1.5 py-0.5 rounded border border-neutral-200 bg-[#2E77BC] text-white text-[8px] font-bold tracking-tighter">
              AMEX
            </span>
            <span className="px-2 py-0.5 rounded border border-neutral-200 bg-white text-neutral-900 text-[9px] font-semibold">
              Pay
            </span>
            <span className="px-1.5 py-0.5 rounded border border-neutral-200 bg-white text-neutral-800 text-[8px] font-bold">
              DISCOVER
            </span>
            <span className="px-2 py-0.5 rounded border border-neutral-200 bg-white text-neutral-700 text-[9px] font-semibold">
              G Pay
            </span>
            <span className="px-2 py-0.5 rounded border border-neutral-200 bg-white flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EB001B] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] -ml-1 inline-block opacity-90" />
            </span>
            <span className="px-2 py-0.5 rounded border border-neutral-200 bg-white text-[#003087] text-[9px] font-extrabold italic">
              P
            </span>
          </div>
        </div>
        }
      </aside>
    </div>
  );
};

export default Cart;
