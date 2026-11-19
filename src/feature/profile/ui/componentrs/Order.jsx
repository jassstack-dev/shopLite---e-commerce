import React from 'react'
import {
  UserRound,
  MapPin,
  Package,
  Pencil,
  Plus,
  Mail,
  Phone,
  ShoppingBag,
  Truck,
  CreditCard,
  CalendarDays,
  ChevronRight
} from 'lucide-react';
import { useSelector } from 'react-redux';


const Order = () => {
  
const {orders} = useSelector((state)=>state.orders)
console.log(orders)

const selectedAddress = orders?.map((val)=>{
  return val.selectedAddress
})
console.log(selectedAddress)



const products = orders.map((val)=>{
  return val.products
})

console.log(products)

  return (
     <section className="rounded-2xl border border-neutral-200 bg-white p-6 mt-10">

              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-neutral-100 p-3">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-neutral-900">
                      My Orders
                    </h2>
                    <p className="text-xs text-neutral-500">
                      Your recent purchases
                    </p>
                  </div>
                </div>

                <button className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-black">
                  View All <ChevronRight size={16} />
                </button>
              </div>

              {
                orders.map((order)=>{
                  return <div className="space-y-4">

                {/* Order 1 */}
                <div className="rounded-xl border border-neutral-200 p-5 mt-10">

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-neutral-400">Order ID</p>
                      <h3 className="mt-1 text-sm font-semibold text-neutral-900">
                        #{order.orderId}
                      </h3>
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                      {order.status}
                    </span>
                  </div>

                  {order.products.map((product) => (
  <div
    key={product.id}
    className="my-4 flex items-center gap-4 border-y border-neutral-100 py-4"
  >
    <div className="h-16 w-16 overflow-hidden rounded-lg bg-neutral-100">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-full w-full object-cover"
      />
    </div>

    <div className="flex-1">
      <h4 className="text-sm font-semibold text-neutral-900">
        {product.title}
      </h4>

      <p className="mt-1 text-xs text-neutral-500">
        Qty: {product.quantity}
      </p>
    </div>

    <p className="font-semibold text-neutral-900">
      ${(product.price * product.quantity).toFixed(2)}
    </p>
  </div>
))}

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <CalendarDays size={15} />
                      {order.orderDate}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                      <Truck size={16} />
                      {order.payment.paymentMethodName} , <h1>Payable amount after discount - <span >${order.totalAmount}</span></h1>
                    </div>

                    <br />
                
                  {order.selectedAddress ? (
  <p>
    {order.selectedAddress.city},{" "}
    {order.selectedAddress.state},{" "}
    {order.selectedAddress.zipCode}
  </p>
) : (
  <p>Address nahi hai</p>
)}
                
                 
                  </div>

                  
                  

                </div>


               

              </div>
                })
              }
            </section>
  )
}

export default Order