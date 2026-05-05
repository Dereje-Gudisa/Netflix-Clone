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


import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const ItemsContainer = () => {
  return (

    <>
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
    
    </>
  )
}

export default ItemsContainer