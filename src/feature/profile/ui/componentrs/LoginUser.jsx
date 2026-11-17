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

const LoginUser = () => {

    const {user} = useSelector((state)=> state.auth)
    console.log(user)
    


  return (
    <>
    <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-neutral-400">
            Shoplite / Account
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
            My Profile
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Manage your personal information and orders.
          </p>
        </div>
        {<div className="space-y-5">

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">

              <div className="flex flex-col items-center text-center">

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-900 text-white">
                  <UserRound size={42} />
                </div>

                <h2 className="mt-4 text-xl font-semibold text-neutral-900">
                  {user.username}
                </h2>

                <p className="mt-1 text-sm text-neutral-500">
                  Premium Customer
                </p>

                <button className="mt-5 rounded-xl border border-neutral-200 px-5 py-2.5 text-sm font-medium hover:bg-neutral-50">
                  Edit Profile
                </button>

              </div>

              <div className="mt-7 space-y-5 border-t border-neutral-100 pt-6">

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-neutral-400" />
                  <div>
                    <p className="text-xs text-neutral-400">Email Address</p>
                    <p className="mt-1 text-sm font-medium text-neutral-800">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-neutral-400" />
                  <div>
                    <p className="text-xs text-neutral-400">Phone Number</p>
                    <p className="mt-1 text-sm font-medium text-neutral-800">
                      {user.phone}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <Package size={20} className="text-neutral-500" />
                <h3 className="mt-3 text-2xl font-bold text-neutral-900">
                  12
                </h3>
                <p className="text-xs text-neutral-500">Total Orders</p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <MapPin size={20} className="text-neutral-500" />
                <h3 className="mt-3 text-2xl font-bold text-neutral-900">
                  02
                </h3>
                <p className="text-xs text-neutral-500">Saved Addresses</p>
              </div>

            </div>
          </div>}
        </>
  )
}

export default LoginUser