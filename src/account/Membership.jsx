import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { SlArrowRight } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { BsExclamationOctagon } from "react-icons/bs";
import { PiDevicesLight } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdOutlineAccountBox } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import ItemsContainer from './ItemsContainer';
import AccountMenu from './AccountMenu';

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GrEdit } from "react-icons/gr";




const Membership = () => {

  return (
    <>
      <div className='mt-30 w-full h-screen bg-gray-500 flex items-center justify-center'>
        <div className='w-[100%] h-auto text-black text-3xl font-bold border-2 border-gray-500 bg-white grid grid-cols-5 gap-4 justify-center'>
            
          <AccountMenu />

          <div className='w-1/2 col-3 col-span-3 '>
            <h1 className='ml-5'>Account</h1>
            <p className='ml-5 text-gray-500 text-lg'>Membership Details</p>
            <div className='m-5 border-1 border-gray-400 text-lg rounded-lg'>
              <h1 className='bg-blue-600 text-white my-5 p-3 w-2/3 text-sm rounded-r-lg '>
                Member since March 2026
              </h1>
                <div className='ml-5'>
                  <h1>Permium Plan</h1>
                  <p className='text-sm text-gray-400'>4K video resolution with spatial audio, ad-free watching and more.</p>
                </div>
              <div className='mt-5 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Change plan</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>
              
            </div>
            <p className='ml-5 mt-10 text-gray-500 text-lg'>Payment info</p>
            <div className='m-5  border-1 border-gray-400 flex flex-col items-center rounded-lg'>

              <div className='w-[98%] mt-2 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <MdOutlinePayment />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Manage payment method </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

              <div className='w-[98%] mt-2 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <PiDevicesLight />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Redeem gift or promo code </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

              <div className='w-[98%] mt-2 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <CiLock />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>View payment history </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

            </div>
            <div className='m-5 p-0 border-1 border-gray-400 text-lg '>
              <div className='w-full   text-lg'>
                <Item className="w-full h-10  hover:bg-gray-200  " >
                  <ItemContent className="w-full text-red-500 h-fit flex justify-center items-center">
                    <ItemTitle>Cancel Membership</ItemTitle>
                  </ItemContent>
                </Item>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Membership