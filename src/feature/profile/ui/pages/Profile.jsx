
import React from 'react';
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
import LoginUser from '../componentrs/LoginUser';
import Address from '../componentrs/Address';
import Order from '../componentrs/Order';

const Profile = () => {

  return (
    <div className="min-h-screen w-full bg-neutral-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        
<LoginUser/>
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">

          {/* User Profile */}
              <Address/>
          

          {/* Right Section */}
          <div className="space-y-7 lg:col-span-2">

            {/* Address */}
                <Order/>

            {/* Orders */}
   

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
