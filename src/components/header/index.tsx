import {useState} from 'react'
import { Menu } from '@mui/material'
import { sortParams } from '@/utils/data'
import AppDrawer from '../drawer'
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {BiSort} from 'react-icons/bi'
import {BsCartFill, BsSortDown} from 'react-icons/bs'

import styles from './header.module.scss'
const AppHeader = ({onSortRestaurant, onSearchRestaurant}:any) => {

    const [openDrawer, setOpenDrawer] =useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
       setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
       setAnchorEl(null);
    };

   const toggleDrawer =
   ( open: boolean) =>
   (event: React.KeyboardEvent | React.MouseEvent) => {
     if (
       event &&
       event.type === 'keydown' &&
       ((event as React.KeyboardEvent).key === 'Tab' ||
         (event as React.KeyboardEvent).key === 'Shift')
     ) {
       return;
     }

     setOpenDrawer(open);
   };


    return ( 
        <div 
            className="fixed z-40 sm:h-20 h-fit sm:py-0 py-5 w-full sm:px-10 px-5  items-center" 
            style={{borderBottom:'2px solid whitesmoke',background:'white'}}
        >
            <div className="flex h-full w-full items-center">
                <div className='flex items-center'>
                        <AiOutlineMenu onClick={toggleDrawer(true)} size={20} className="cursor-pointer mr-5 sm:mr-10" />
                        <img className='hidden sm:inline mr-10' src="/assets/logo.svg" alt="" />
                        <HiLocationMarker size={25} /> <span className="font-semibold text-sm ml-4">Set Location</span>
                </div>

                <AppDrawer
                        toggleDrawer={toggleDrawer}
                        openDrawer={openDrawer}
                    />

                <div className="m-auto" >
                        <div className="sm:flex hidden items-center  rounded-2xl px-4" style={{background:'#f0f0f0'}} >
                            <AiOutlineSearch size={20} />
                            <input 
                                type="text" 
                                className="h-10 text-sm ml-2 w-72 focus:outline-none" 
                                style={{background:'#f0f0f0'}} 
                                placeholder='search restaurant or food'
                                onChange={(e)=>onSearchRestaurant(e)}
                            />
                        </div>
                </div>
                <div className="flex items-center">
                        <span className='font-medium hidden sm:inline cursor-pointer mr-5  text-sm'> SIGN IN </span>
                        <div className="bg-black flex sm:py-2 py-1 text-white rounded-2xl px-5">
                        <BsCartFill size={23} className="sm:mr-3 mr-0" /> 
                        <span  className='hidden sm:inline font-semibold'>CART . 0</span>
                        </div>
                </div>
            </div>
            <div className="flex items-center sm:hidden">
                <div className=" mr-2 flex mt-4 flex-1 items-center  rounded-2xl px-4" style={{background:'#f0f0f0'}} >
                    <AiOutlineSearch size={20} />
                    <input 
                        type="text" 
                        className="h-12 text-sm ml-2 w-full focus:outline-none" 
                        style={{background:'#f0f0f0'}} 
                        placeholder='search restaurant or food'
                        onChange={(e)=>onSearchRestaurant(e)}
                    />
                </div>
                <BiSort size={23} onClick={handleClick} />
                <Menu
                    style={{width:'100%'}}
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                  
                    <div className="py-5 px-5" style={{width:'350px'}}>
                        <div className="flex">
                            <BsSortDown size={30} />
                            <span className="ml-3 font-semibold text-2xl mb-5">Sort</span>
                        </div>
                        {sortParams.map((item, i)=>
                        <div key={i} className="flex mb-4">
                            <input 
                                onClick={()=>{
                                    onSortRestaurant(item.key)
                                    handleClose()
                                }} 
                                type="radio" 
                                className=' mr-2 ' 
                                name="types" 

                            />
                            <span>{item.label}</span>
                        </div>
                        )}
                    </div>
                </Menu>
            </div>
        </div>
     );
}
 
export default AppHeader;