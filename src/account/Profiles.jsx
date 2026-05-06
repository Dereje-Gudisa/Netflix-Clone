import React from 'react'
import AccountMenu from './AccountMenu'
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { SlArrowRight } from "react-icons/sl";
import { MdOutlinePayment } from "react-icons/md";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"


const Profiles = () => {
  return (
    <>
      <div className='w-[100%] h-screen text-black text-3xl font-bold border-2 border-gray-500 bg-white grid grid-cols-5 gap-4 justify-center'>
          <AccountMenu />
          <div className='w-1/2 col-3 col-span-3 '>
            <h1 className='ml-5'>Profiles</h1>
            <p className='ml-5 text-gray-500 text-lg'>Parental Controls and Permissions</p>
            <div className='m-5 border-1 border-gray-400 text-lg rounded-lg'>
              
              <div className='mt-5 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Adjust parental controls</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>

              <div className='mt-5 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Transfer a profile</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
              </div>
              
            </div>

            <p className='ml-5 mt-10 text-gray-500 text-lg'>Profile Settings</p>
            <div className='m-5  border-1 border-gray-400 flex flex-col items-center rounded-lg'>

              <div className='w-[98%] mt-2 pt-3  text-lg border-t-1 border-gray-300'>
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <MdOutlinePayment />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Dereje Gudisa </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><span className='px-3 py-1 mx-1 bg-[#BCD8FF] rounded-lg'>Your Profile</span><SlArrowRight /></Button>
                  </ItemActions>
                </Item>

                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <MdOutlinePayment />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>John Doe</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>

                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <MdOutlinePayment />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Mohammed A </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>
                
                <Item className="w-full h-14  hover:bg-gray-200 " >
                  <ItemMedia variant="icon" className="hover:bg-gray-200 h-fit">
                    <MdOutlinePayment />
                  </ItemMedia>
                  <ItemContent className="w-full h-fit">
                    <ItemTitle>Caroline </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <Button variant='gohst'><SlArrowRight /></Button>
                  </ItemActions>
                </Item>


              </div>


            </div>
            
          </div>
          

        </div>
    </>
  )
}

export default Profiles