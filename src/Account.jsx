import React from 'react';
import { Button } from "@/components/ui/button"
import { SlArrowRight } from "react-icons/sl";

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
        <div className='w-full h-auto text-black text-3xl font-bold border-2 border-gray-500 bg-white flex items-center justify-center'>


          <Item className="w-full border-1 border-gray-400">
            <ItemMedia variant="icon" className="hover:bg-gray-200">
              <p>icon</p>
            </ItemMedia>
            <ItemContent className="w-full hover:bg-gray-200">
              <ItemTitle>Manage payment method</ItemTitle>
            </ItemContent>
            <ItemActions>
              <Button variant='gohst'><SlArrowRight /></Button>
            </ItemActions>

          </Item>
          
          <div>
            <p>Back to Netflix</p>
          </div>
          <div className='w-1/2'>
            <div className='m-5 p-5 border-1 border-gray-400 text-lg'>
              <h1 className='border-2 bg-blue'>Member since March 2026</h1>
              <h1>Permium Plan</h1>
              <p>Next payment: may 20, 2026</p>
              <div className='m-5 p-5 border-t-1 border-gray-400 text-lg'>Manage memership</div>
            </div>
            <div className='m-5  border-1 border-gray-400'>
              <div className='m-5 p-5 border-b-1 border-gray-400 text-lg'>Change <span>**=</span></div>
              <div className='m-5 p-5 border-b-1 border-gray-400 text-lg'>Manage payment method</div>
              <div className='m-5 p-5 border-b-1 border-gray-400 text-lg'>Manage access and devices</div>
              <div className='m-5 p-5 border-b-1 border-gray-400 text-lg'>Update password</div>
              <div className='m-5 p-5 border-b-1 border-gray-400 text-lg'>Adjust parental controls</div>
              <div className='m-5 p-5 border-b-1 border-gray-400 text-lg'>Edit settings</div>
            </div>
            <div className='m-5 p-5 border-1 border-gray-400'>
              <div className='m-5  text-lg'>Manage profiles <span>**=</span></div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Account