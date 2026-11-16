import { ShoppingBag } from "lucide-react";

const EmptyCart = ({ setCloseCart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[350px] px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mb-5">
        <ShoppingBag className="w-9 h-9 text-neutral-400 stroke-[1.5]" />
      </div>

      <h3 className="text-xl font-semibold text-neutral-900">
        Your cart is empty
      </h3>

      <p className="text-sm text-neutral-500 mt-2 max-w-[260px] leading-relaxed">
        Looks like you haven't added anything to your cart yet.
        Let's find something you'll love!
      </p>

      <button
        onClick={() => setCloseCart(true)}
        className="mt-6 px-8 py-3 bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-widest rounded-full transition-all"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;