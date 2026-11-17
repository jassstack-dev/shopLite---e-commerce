import React, { useState } from 'react'
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
import { useNavigate } from 'react-router';

const Address = () => {

    const navigate = useNavigate()
    const address = JSON.parse(localStorage.getItem('address')) || []



  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6">

              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-neutral-100 p-3">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-neutral-900">
                      My Addresses
                    </h2>
                    <p className="text-xs text-neutral-500">
                      Manage your delivery addresses
                    </p>
                  </div>
                </div>

                <button 
                onClick={()=>
                    navigate('/checkout')
                }
                 className="flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium hover:bg-neutral-50">
                  <Plus size={15} />
                  Add New
                </button>
              </div>

              {
                address.map((item)=>{
                    return <div className="grid gap-2 sm:grid-cols-2 ">

                <div className="rounded-xl border border-neutral-200 p-5">

                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white">
                      Default
                    </span>
                    <button className="text-neutral-400 hover:text-neutral-900">
                      <Pencil size={16} />
                    </button>
                  </div>

                  <h3 className="font-semibold text-neutral-900">
                    Vimal Jass
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    House No. 24, Main Road,
                    Bhogal, New Delhi, Delhi - 110014
                  </p>

                  <p className="mt-3 text-sm text-neutral-600">
                    +91 98765 43210
                  </p>

                </div>

            

              </div>
                })
              }
            </section>
  )
}

export default Address