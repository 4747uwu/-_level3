import React from 'react'
import { assets } from '../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen  border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15%]'>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to='/add'>

                <img className='w-5 h-5' src = { assets.add_icon}/>
                <p className='text-sm'>Add Product</p>

            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to='/list'>

                <img className='w-5 h-5' src = { assets.order_icon}/>
                <p className='text-sm'>List Items</p>

            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to='/adminOrder'>

                <img className='w-5 h-5' src = { assets.order_icon}/>
                <p className='text-sm'>Orders</p>

            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to='/InventoryStuff'>

                <img className='w-5 h-5' src = { assets.order_icon}/>
                <p className='text-sm'>Inventory</p>

            </NavLink>

        </div>

        
      
      
      
    </div>
  )
}

export default Sidebar;
