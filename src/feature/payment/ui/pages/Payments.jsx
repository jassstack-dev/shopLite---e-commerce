
import React, { useState } from 'react'
import {
  CreditCard,
  Smartphone,
  Landmark,
  Wallet,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  LockKeyhole,
  CheckCircle2
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../carts/store/cartSlice';
import { Navigate, useNavigate } from 'react-router';
import { addOrder } from '../../store/orderSlice';




const Payments = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('upi')
    const cartItems = useSelector((state) => state.cart.cartItems);
     const {user} = useSelector((state)=>state.auth)
     const {orders} = useSelector((state)=>state.orders)
    const [paymentDetails, setPaymentDetails] = useState({
  upiId: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
  bank: ''
});
    

    const totalPrice = cartItems.reduce((acc, items)=>{
        return acc + (items.price * items.quantity)
    },0)

    console.log(totalPrice)

  const methods = [
    {
      id: 'upi',
      title: 'UPI',
      description: 'Google Pay, PhonePe, Paytm',
      icon: Smartphone
    },
    {
      id: 'card',
      title: 'Credit / Debit Card',
      description: 'Visa, Mastercard, RuPay',
      icon: CreditCard
    },
    {
      id: 'netbanking',
      title: 'Net Banking',
      description: 'All major banks supported',
      icon: Landmark
    },
    {
      id: 'cod',
      title: 'Cash on Delivery',
      description: 'Pay when your order arrives',
      icon: Wallet
    }
  ]


  const handlePlaceOrder = ()=>{

    

    const selectedMethod = methods.find((val)=>{
return val.id  === paymentMethod
    })


      if (!selectedMethod) return;

     

    const orderPayment = {
        paymentMethodId: selectedMethod.id,
    paymentMethodName: selectedMethod.title,
    paymentDetails: paymentDetails,
    totalAmount: Number(
      (totalPrice * 0.9).toFixed(2)
    )




    }

    const order = {
      orderId : Date.now(),
      userId : user.id,
      products : [...cartItems],
      payment: orderPayment,
      totalAmount: Number((totalPrice * 0.9).toFixed(2)),
  status: "Processing",
  orderDate: new Date().toISOString(),

    }
    
dispatch(addOrder(order))
    localStorage.setItem('order', JSON.stringify(order))
    console.log(order)
    dispatch(clearCart())

      alert('Your order placed successfully');

      navigate('/')
     

  }


  console.log('REDUX USER', user)
  console.log('REDUX CART-ITEMS', cartItems)
  console.log('REDUX STORE', orders)

  
 


  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-neutral-400">
            Shoplite / Checkout
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Payment
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Choose your preferred payment method.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-8">

              <div className="mb-7">
                <h2 className="text-lg font-semibold text-neutral-900">
                  Select Payment Method
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  All transactions are secure and encrypted.
                </p>
              </div>

              <div className="space-y-3">
                {methods.map((method) => {
                  const Icon = method.icon
                  const active = paymentMethod === method.id

                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                        active
                          ? 'border-neutral-900 bg-neutral-50'
                          : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        active ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600'
                      }`}>
                        <Icon size={20} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-neutral-900">
                          {method.title}
                        </h3>
                        <p className="mt-1 text-xs text-neutral-500">
                          {method.description}
                        </p>
                      </div>

                      <div className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                        active
                          ? 'border-neutral-900 bg-neutral-900'
                          : 'border-neutral-300'
                      }`}>
                        {active && (
                          <CheckCircle2 size={14} className="text-white" />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Selected Method Info */}
              <div className="mt-6 rounded-xl bg-neutral-50 p-4">
                {paymentMethod === 'upi' && (
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      UPI ID
                    </label>
                    <input
                    value={paymentDetails.upiId}
                    onChange={(e)=>setPaymentDetails({
                        ...paymentDetails, 
                        upiId: e.target.value
                    })}
                      type="text"
                      placeholder="example@upi"
                      className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                    />
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-3">
                    <input
                    value={paymentDetails.cardNumber}
                    onChange={(e)=>setPaymentDetails({
                        ...paymentDetails,
                        cardNumber:e.target.value
                    })}
                      type="text"
                      placeholder="Card Number"
                      className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        value={paymentDetails.expiry}
                        onChange={(e)=>{
                            setPaymentDetails({...paymentDetails, expiry:e.target.value})
                        }}
                        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                      />
                      <input
                      value={paymentDetails.cvv}
                      onChange={(e)=>setPaymentDetails({
                        ...paymentDetails, cvv:e.target.value
                      })}
                        type="password"
                        placeholder="CVV"
                        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div>
                    <label 
                     className="mb-2 block text-sm font-medium">
                      Select your bank
                    </label>
                    <select 
                    value={paymentDetails.bank}
                    onChange={(e)=>setPaymentDetails({
                        ...paymentDetails,
                        bank: e.target.value
                    })}
                     className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900">
                      <option value="">Choose Bank</option>
                      <option>State Bank of India</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                    </select>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <p className="text-sm leading-6 text-neutral-600">
                    You can pay in cash when your order is delivered to your doorstep.
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-neutral-500">
                <ShieldCheck size={16} />
                Your payment information is protected.
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-neutral-900">
                Payment Summary
              </h2>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between text-neutral-500">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>

                <div className="flex justify-between text-neutral-500">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="flex justify-between text-neutral-500">
                  <span>Discount</span>
                  <span>-${((totalPrice*10)/100).toFixed(2)}</span>
                </div>

                <div className="border-t border-neutral-100 pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-neutral-900">
                      Total Amount
                    </span>
                    <span className="text-xl font-bold text-neutral-900">
                      ${(totalPrice - (totalPrice*10)/100).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
              onClick={handlePlaceOrder}
                type="button"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-4 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                Place Order
                <ChevronRight size={17} />
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-neutral-400">
                <LockKeyhole size={13} />
                Secure Checkout
              </div>

              <p className="mt-5 text-center text-xs leading-5 text-neutral-400">
                By placing your order, you agree to our Terms & Conditions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Payments
