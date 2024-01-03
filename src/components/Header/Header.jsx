import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Header.css';
import { HamburgerMenu } from '../Hamburger/Hamburger';
import { useNavigate } from 'react-router';


export const Header = () => {
	const navigate = useNavigate();
	return (
		<div className='header'>
			<img src='/logo_2.png' alt='logo' className='logo' height='60px' onClick={() => navigate('/')}/>
			<Navbar />
			<HamburgerMenu />
      
		</div>
	);
};
