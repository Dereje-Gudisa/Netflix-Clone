import React from 'react';
import logo from './assets/netflix-logo.png';
import profile from './assets/profile.png';
import profile2 from './assets/profile2.png';
import profile3 from './assets/profile3.png';
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { LuCircleHelp } from "react-icons/lu";
import { GrEdit } from "react-icons/gr";



function Nav() {

  return (
    <>
        <nav className='bg-black/70 px-10 flex justify-between fixed top-0 left-0 w-full'>
            <img className='w-30 h-auto' src={logo}alt="Netflix" />
            <div className='text-white w-full flex justify-between'>
                <ul className='flex justify-around items-center w-140'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shows</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Latest</a></li>
                    <li><a href="#">My List</a></li>
                    <li><a href="#">Browse by Language</a></li>
                </ul>
                <ul className='text-white flex justify-around items-center w-80'>
                    <button><IoSearch /></button>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#"><IoMdNotificationsOutline /></a></li>

                    <DropdownMenu>
                        <DropdownMenuTrigger render={<Button variant="ghost" size="icon">
                            <Avatar>
                                
                                <AvatarImage src={profile} className = 'rounded-sm' alt="profile one"/>
                                <AvatarFallback>Profile</AvatarFallback>
                            </Avatar></Button>} />
                        <DropdownMenuContent className="w-60 text-sm bg-[#141414] text-white ">
                            <DropdownMenuGroup>

                            <DropdownMenuItem><img  src={profile2} alt="profile2" className='w-8 h-8 rounded-sm mr-2' />Dereje G</DropdownMenuItem>

                            <DropdownMenuItem><img  src={profile3} alt="profile2" className='w-8 h-8 rounded-sm mr-2' />John Doe</DropdownMenuItem>

                            <DropdownMenuItem><img  src={profile} alt="profile2" className='w-8 h-8 rounded-sm mr-2' />Mohammed A</DropdownMenuItem>

                            <DropdownMenuItem className = 'mt-2'><GrEdit />Manage Profile</DropdownMenuItem>
                            
                            <Link to="/account"><DropdownMenuItem><UserIcon />Account</DropdownMenuItem></Link>

                            <DropdownMenuItem><LuCircleHelp />Help Center</DropdownMenuItem>

                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                            <DropdownMenuItem variant="destructive"><LogOutIcon />Sign out of Netflix</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ul>
            </div>
      </nav>

    </>
  )
}

export default Nav