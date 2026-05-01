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




const Account = () => {

  return (
    <>
      <div className='mt-30 w-full h-screen bg-gray-500 flex items-center justify-center'>
        <div className='w-[100%] h-auto text-black text-3xl font-bold border-2 border-gray-500 bg-white grid grid-cols-5 gap-4 justify-center'>

          <div className='flex-start border-2 border-black col-2'>

            <div className='w-[98%] my-10   text-lg' >
              <Item className="w-full  hover:bg-gray-200 " >
                <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                  <GoArrowLeft />
                </ItemMedia>
                <ItemContent className="w-full h-fit">
                   <Link to="/"><ItemTitle>Back to Netflix </ItemTitle></Link>
                </ItemContent>
              </Item>
            </div>

            <div className='w-[98%] mt-2 text-lg'>
              <Item className="w-full  hover:bg-gray-200 " >
                <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                  <IoMdHome />
                </ItemMedia>
                <ItemContent className="w-full h-fit">
                  <ItemTitle>OverView </ItemTitle>
                </ItemContent>
              </Item>
            </div>

            <div className='w-[98%] mt-2   text-lg'>
              <Item className="w-full  hover:bg-gray-200 " >
                <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                  <MdOutlinePayment />
                </ItemMedia>
                <ItemContent className="w-full h-fit">
                  <ItemTitle>MemberShip </ItemTitle>
                </ItemContent>
              </Item>
            </div>

            <div className='w-[98%] mt-2   text-lg'>
              <Item className="w-full  hover:bg-gray-200 " >
                <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                 <IoShieldCheckmarkOutline />
                </ItemMedia>
                <ItemContent className="w-full h-fit">
                  <ItemTitle>Security </ItemTitle>
                </ItemContent>
              </Item>
            </div>

            <div className='w-[98%] mt-2   text-lg'>
              <Item className="w-full  hover:bg-gray-200 " >
                <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                  <PiDevicesLight />
                </ItemMedia>
                <ItemContent className="w-full h-fit">
                  <ItemTitle>Devices </ItemTitle>
                </ItemContent>
              </Item>
            </div>

            <div className='w-[98%] mt-2   text-lg'>
              <Item className="w-full  hover:bg-gray-200 " >
                <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                  <MdOutlineAccountBox />
                </ItemMedia>
                <ItemContent className="w-full h-fit">
                  <ItemTitle>Profile </ItemTitle>
                </ItemContent>
              </Item>
            </div>

          </div>

          

          <div className='w-1/2 col-3 col-span-3 '>
            <h1 className='ml-5'>Account</h1>
            <p className='ml-5 text-gray-500 text-lg'>Membership Details</p>
            <div className='m-5 border-1 border-gray-400 text-lg rounded-lg'>
              <h1 className='bg-blue-600 text-white my-5 p-3 w-2/3 text-sm rounded-r-lg '>
                Member since March 2026
              </h1>
                <div className='ml-5'>
                  <h1>Permium Plan</h1>
                  <p className='text-sm text-gray-400'>Next payment: may 20, 2026</p>
                </div>
              <div className='mt-5 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Manage memership </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>
              
            </div>
            <p className='ml-5 mt-10 text-gray-500 text-lg'>Quick LInks</p>
            <div className='m-5  border-1 border-gray-400 flex flex-col items-center rounded-lg'>
              {/* <Item className="w-[98%] my-3 border-b-1  border-gray-400 h-14 hover:bg-gray-200 " >
                <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                  <p>icon</p>
                </ItemMedia>
                <ItemContent className="w-full h-fit">
                  <ItemTitle>Change</ItemTitle>
                </ItemContent>
                <ItemActions>
                  <Button variant='gohst'><SlArrowRight /></Button>
                </ItemActions>
              </Item> */}

              <div className='w-[98%] mt-2 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <FaRankingStar />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Change Plan </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

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
                    <ItemTitle>Manage access and devices </ItemTitle>
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
                    <ItemTitle>Update password </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

              <div className='w-[98%] mt-2 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <BsExclamationOctagon />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Adjust parental controls </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

              <div className='w-[98%] m-2 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <IoSettingsOutline />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Edit settings </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

            </div>
            <div className='m-5 p-5 border-1 border-gray-400 text-lg rounded-lg'>
              <div className='w-[98%]   text-lg'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Manage profiles</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Account