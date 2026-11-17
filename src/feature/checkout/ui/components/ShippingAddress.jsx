import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router';

const ShippingAddress = () => {
  const { register, handleSubmit } = useForm();
  const [address, setAddress] = useState(JSON.parse(localStorage.getItem('address'))||[])
  console.log(address)

  // if(address){
  //   return <Navigate to={'/payments'} />
  // }else{
  //   return
  // }


  const onSubmit = (data) => {
    console.log('Shipping Data:', data);

    const arr = [...address, data]
    setAddress(arr)
    localStorage.setItem('address', JSON.stringify(arr))
        alert('Shipping Address Submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Shipping Address</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                {...register('firstName')}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                {...register('lastName')}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                {...register('email')}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Phone
              </label>
              <input
                type="text"
                placeholder="+88 Enter Phone number"
                {...register('phone')}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-blue-500"
              />
            </div>
          </div>

          {/* City, State, ZIP Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                City
              </label>
              <select
                {...register('city')}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                State
              </label>
              <select
                {...register('state')}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                placeholder="Enter ZIP Code"
                {...register('zipCode')}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-blue-500"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2 pt-2">
            <input
              type="checkbox"
              id="saveInfo"
              {...register('saveInfo')}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="saveInfo" className="text-sm text-gray-600">
              Save this information for the next time
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition duration-200 text-sm shadow-sm"
            >
              Continue to Shipping Method
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingAddress;