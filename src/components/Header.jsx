import React from 'react'
import LogoA from '../assets/Images/Icon_logo.svg';
import LogoB from '../assets/Images/logo_black.svg';
// import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import './homeLayout.css'
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const Navigate = useNavigate();
    return ( 
        <div className='w-full sticky'>
            <div className='bg-[#E5E5E5] hidden md:flex justify-between items-center py-[4px] px-[30px]'>
                <img src={LogoA} alt="logo" className='object-contain h-[30px] w-[40px] cursor-pointer' onClick={()=> Navigate(`/`)}/>
                <div className='flex items-center'>
                    {['Explore', 'Sign up', 'Log in'].map((menu, index) => (
                        <div className='mr-[13px] p-[5px] cursor-pointer text-[16px] font-[Josefin Sans]' key={index}>{menu}</div>
                    ))}
                </div>
            </div>
            <div className='hidden md:flex justify-between items-center py-[2px] px-[30px] sticky top-0 bg-white z-[100] cursor-pointer'>
                <div className='flex justify-between items-center'>
                    <img src={LogoB} alt="logo" className='object-contain h-[60px] w-[85px] mr-[5rem]' onClick={()=> Navigate(`/`)}/>
                    {['New', 'Men', 'Women', 'kids'].map((menu, index) => (
                        <div className='text-black mr-[17px] p-[5px] cursor-pointer text-[17px] rounded-md font-[Josefin Sans] hover:bg-black hover:text-white hover:transition-all' key={index} onClick={()=> Navigate(`/${menu.toLowerCase()}`)}>{menu}</div>
                    ))}
                </div>
                <div className='flex items-center'>
                    {/* <div className='mr-[27px] bg-[#E5E5E5] rounded-xl p-[7px] h-[40px] hover:w-[350px] py-0 px-[6px]'>
                        <input type="text" placeholder='Search' className='border-none bg-none p-0 outline-none text-[15px] float-left leading-10 text-black w-0 transition-all' />
                        <SearchIcon className='w-[40px] h-[40px] float-right rounded-md flex justify-between items-center cursor-pointer' />
                    </div> */}
                    <NotificationsNoneIcon className='w-[30px] h-[30px] cursor-pointer' />
                    <LanguageIcon className='w-[30px] h-[30px] cursor-pointer ml-4' />
                    <ShoppingCartIcon  className='w-[30px] h-[30px] cursor-pointer ml-4' />
                </div>
            </div>

            {/* mobile sidebar */}
            <div className='md:hidden flex justify-between items-center py-2 px-4'>
                <img src={LogoA} alt="logo" className='object-contain h-[30px] w-[40px] cursor-pointer' />
                <div className='flex justify-center items-center'>
                    <NotificationsNoneIcon className='w-[25px] h-[25px] cursor-pointer' />
                    <ShoppingCartIcon className='w-[25px] h-[25px] cursor-pointer ml-2' />
                    <MenuIcon className='w-[25px] h-[25px] cursor-pointer ml-2' />
                </div>
            </div>
            {/* mobile sidebar */}

            <div className='navText__container'>
                <h3>Snipe our latest brands of footwears <a href='/new'>Click here</a></h3>
            </div>
        </div>
    )
}

export default Header

