import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Header.css';
import { StyledButton1 } from '../Styled/StyledButtons';
import { HamburgerMenu } from '../Hamburger/Hamburger';

export const Header = () => {
	return (
		<div className='header'>
			<img src='/logo_2.png' alt='logo' className='logo' height='60px' />
			<Navbar />
			<HamburgerMenu />
      
		</div>
	);
};
