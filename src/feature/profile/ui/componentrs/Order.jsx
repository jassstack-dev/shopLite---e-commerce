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


const Order = () => {
  return (
     <section className="rounded-2xl border border-neutral-200 bg-white p-6">

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

              <div className="space-y-4">

                {/* Order 1 */}
                <div className="rounded-xl border border-neutral-200 p-5">

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-neutral-400">Order ID</p>
                      <h3 className="mt-1 text-sm font-semibold text-neutral-900">
                        #ORD-2026-001
                      </h3>
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                      Delivered
                    </span>
                  </div>

                  <div className="my-4 flex items-center gap-4 border-y border-neutral-100 py-4">

                    <div className="h-16 w-16 overflow-hidden rounded-lg bg-neutral-100">
                      <img
                        src="https://placehold.co/100x100"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-neutral-900">
                        Premium Headphones
                      </h4>
                      <p className="mt-1 text-xs text-neutral-500">
                        Qty: 1 · Black
                      </p>
                    </div>

                    <p className="font-semibold text-neutral-900">
                      $120.00
                    </p>

                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <CalendarDays size={15} />
                      12 Nov 2026
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                      <Truck size={16} />
                      Delivered Successfully
                    </div>
                  </div>

                </div>

                {/* Order 2 */}
                <div className="rounded-xl border border-neutral-200 p-5">

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-neutral-400">Order ID</p>
                      <h3 className="mt-1 text-sm font-semibold text-neutral-900">
                        #ORD-2026-002
                      </h3>
                    </div>

                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                      Processing
                    </span>
                  </div>

                  <div className="my-4 flex items-center gap-4 border-y border-neutral-100 py-4">

                    <div className="h-16 w-16 overflow-hidden rounded-lg bg-neutral-100">
                      <img
                        src="https://placehold.co/100x100"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-neutral-900">
                        Smart Watch Series
                      </h4>
                      <p className="mt-1 text-xs text-neutral-500">
                        Qty: 2 · Silver
                      </p>
                    </div>

                    <p className="font-semibold text-neutral-900">
                      $180.00
                    </p>

                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <CalendarDays size={15} />
                      16 Nov 2026
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                      <CreditCard size={16} />
                      Paid via UPI
                    </div>
                  </div>

                </div>

              </div>
            </section>
  )
}

export default Order