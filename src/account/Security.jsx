import React from 'react'


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
import { IoIosWarning } from "react-icons/io";



import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const Security = () => {
  return (
    <>
      <div className='mt-30 w-full h-screen bg-gray-500 flex items-center justify-center'>
        <div className='w-[100%] h-auto text-black text-3xl font-bold border-2 border-gray-500 bg-white grid grid-cols-5 gap-4 justify-center'>
            
          <AccountMenu />

          <div className='w-[80%] col-3 col-span-3 '>
            <div className='bg-[#f7e0b6] p-5 mx-5 flex'>
              <IoIosWarning className='text-[3.5rem] mx-2'/>
                <div>
                  <h2 className='text-lg pb-1'>Verify your mobile number</h2>
                  <p className='text-xs' >Verifying your phone number enhances security and can help you access and recover your account. <span className='underline'>Verify now.</span></p>
                </div>
             
            </div>
            <h1 className='ml-5 mt-5'>Security</h1>
            <p className='ml-5 text-gray-500 text-lg'>Account Details</p>
            <div className='m-5 border-1 border-gray-400 text-lg rounded-lg'>
              <div className='mt-5 pt-3  text-lg'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Password</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

              <div className='mt-5 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Email</ItemTitle>
                    <ItemDescription>derejeg@netflix.com</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

              <div className='mt-5 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Mobile phone</ItemTitle>
                    <ItemDescription>09-55 **** 20</ItemDescription>


                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>
              
            </div>
            <p className='ml-5 mt-10 text-gray-500 text-lg'>Access and Privacy</p>
            <div className='m-5  border-1 border-gray-400 flex flex-col items-center rounded-lg'>

              <div className='w-[98%] mt-2 pt-3  text-lg border-b-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <MdOutlinePayment />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Access and devices</ItemTitle>
                    <ItemDescription>Manage signed-In devices</ItemDescription>

                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

              <div className='w-[98%] mt-2 pt-3  text-lg border-b-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <PiDevicesLight />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Personal info access</ItemTitle>
                    <ItemDescription>Request a copy of personal info</ItemDescription>

                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

              <div className='w-[98%] mt-2 pt-3  text-lg border-b-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <CiLock />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Feature testing</ItemTitle>
                    <ItemDescription>On</ItemDescription>
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
                    <ItemTitle>Delete Account</ItemTitle>
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

export default Security
