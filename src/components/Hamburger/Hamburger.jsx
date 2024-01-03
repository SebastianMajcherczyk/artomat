import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import './Hamburger.css';
import { StyledButton2 } from '../Styled/StyledButtons';
import { useNavigate } from 'react-router';

export const HamburgerMenu = () => {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className='hamburger'>
			<Hamburger toggled={menuOpen} toggle={setMenuOpen} />
			<ul
				className={menuOpen ? 'nav-links open' : 'nav-links'}
				onClick={() => setMenuOpen(false)}>
				<li
					onClick={() => {
						setMenuOpen(false);
						navigate('/');
					}}>
					<StyledButton2>Home</StyledButton2>
				</li>
				<li
					onClick={() => {
						setMenuOpen(false);
						navigate('/tehnique');
					}}>
					<StyledButton2 href='#'>Technika</StyledButton2>
				</li>
				<li
					onClick={() => {
						setMenuOpen(false);
						navigate('/prices');
					}}>
					<StyledButton2 href='#'>Ceny</StyledButton2>
				</li>
				<li
					onClick={() => {
						setMenuOpen(false);
						navigate('/portfolio');
					}}>
					<StyledButton2 href='#'>Realizacje</StyledButton2>
				</li>
				<li
					onClick={() => {
						setMenuOpen(false);
						navigate('/visualize');
					}}>
					<StyledButton2>Wizualizacje</StyledButton2>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<StyledButton2 href='#'>Inspiracje</StyledButton2>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<StyledButton2 href='#'>Kontakt</StyledButton2>
				</li>
			</ul>
		</div>
	);
};
