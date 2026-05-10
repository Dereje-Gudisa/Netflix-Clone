import React from 'react';
import { useMovies } from './context/MovieContext'; // Adjust path as needed
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
import { Input } from "@/components/ui/input"
import { MdClear } from "react-icons/md";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { InfoIcon } from "lucide-react"
import {

  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"


function Nav() {
const { setSearchQuery } = useMovies(); // Get the setter function

const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
const handleSearchIcon = () => {
  const searchIcon = document.getElementById('ioSearch');
  const inlineInput = document.getElementById('inline-input');
  searchIcon.style.display = 'none';
  inlineInput.style.display = 'block';
  
};

  return (
    <>
        <nav className='bg-[#0c0c0c] px-10 flex justify-between fixed top-0 left-0 w-full'>
            <Link to="/"><img className='w-30 h-auto' src={logo}alt="Netflix" /></Link>
            <div className='text-white w-full flex justify-between'>
                <ul className='flex justify-around items-center w-140'>
                    
                    <Link to="/">Home</Link>
                    <Link to="/Shows">Shows</Link>
                    <Link to="/Movies">Movies</Link>
                    <Link to="/Games">Games</Link>
                    <Link to="/Latest">Latest</Link>
                    <Link to="/MyList">My List</Link>
                    <Link to="/BrowseByLanguage">Browse by Language</Link>

                </ul>
                
                <ul className='text-white flex justify-around items-center w-130'>

                    <Field className="w-70 " id="inline-input" onChange={(e) => handleInputChange(e)}>
                      <InputGroup>
                        <InputGroupInput id="inline-start-input" placeholder="Titles, people, genres" />
                        <InputGroupAddon align="inline-start">
                          <SearchIcon className="text-muted-foreground" />
                        </InputGroupAddon>
                      </InputGroup>
                    </Field>

                    <button className='text-2xl' /* onClick={()=>handleSearchIcon()} */><IoSearch className='ioSearch' id='ioSearch'/></button>
                    <li><a href="#">Kids</a></li>
                    <li className='text-2xl'><a href="#"><IoMdNotificationsOutline /></a></li>

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