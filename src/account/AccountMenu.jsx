import React from 'react';
import { Link } from 'react-router-dom';
import { PiDevicesLight } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdOutlineAccountBox } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import Security from './Security';


import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"


const AccountMenu = () => {

  return (
    <>

        <div className='flex-start col-2'>

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
                    <Link to="/account"><ItemTitle>OverView </ItemTitle> </Link>
                </ItemContent>
                </Item>
            </div>

            <div className='w-[98%] mt-2   text-lg'>
                <Item className="w-full  hover:bg-gray-200 " >
                <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <MdOutlinePayment />
                </ItemMedia>
                <ItemContent className="w-full h-fit">
                    <Link to="/membership"><ItemTitle>MemberShip </ItemTitle></Link>
                </ItemContent>
                </Item>
            </div>

            <div className='w-[98%] mt-2   text-lg'>
                <Item className="w-full  hover:bg-gray-200 " >
                <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <IoShieldCheckmarkOutline />
                </ItemMedia>
                <ItemContent className="w-full h-fit">
                    <Link to="/Security"><ItemTitle>Security </ItemTitle></Link>
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
    </>
  )
}

export default AccountMenu


