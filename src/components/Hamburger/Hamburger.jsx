import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import './Hamburger.css';
import { StyledButton2 } from '../Styled/StyledButtons';
import { useNavigate } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';

export const HamburgerMenu = () => {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className='hamburger'>
			<Hamburger toggled={menuOpen} toggle={setMenuOpen} />
			<ul
				className={menuOpen ? 'nav-links open' : 'nav-links'}
				onClick={() => setMenuOpen(false)}>
				<ScrollLink to='home' smooth={true} duration={500} spy={true}>
					<li
						onClick={() => {
							setMenuOpen(false);
							// navigate('/');
						}}>
						<StyledButton2>Home</StyledButton2>
					</li>
				</ScrollLink>
				<ScrollLink to='technika' smooth={true} duration={500} spy={true}>
					<li
						onClick={() => {
							setMenuOpen(false);
							// navigate('/technika');
						}}>
						<StyledButton2>Technika</StyledButton2>
					</li>
				</ScrollLink>
				<ScrollLink to='gallery' smooth={true} duration={500} spy={true}>
					<li
						onClick={() => {
							setMenuOpen(false);
							// navigate('/galeria');
						}}>
						<StyledButton2 href='#'>Realizacje</StyledButton2>
					</li>
				</ScrollLink>
				<ScrollLink to='ceny' smooth={true} duration={500} spy={true}>
					<li
						onClick={() => {
							setMenuOpen(false);
							// navigate('/ceny');
						}}>
						<StyledButton2 href='#'>Ceny</StyledButton2>
					</li>
				</ScrollLink>
				<ScrollLink to='inspiracje' smooth={true} duration={500} spy={true}>
					<li
						onClick={() => {
							setMenuOpen(false);
							// navigate('/inspiracje');
						}}>
						<StyledButton2 href='#'>Inspiracje</StyledButton2>
					</li>
				</ScrollLink>
				<ScrollLink to='visualizer' smooth={true} duration={500} spy={true}>
					<li
						onClick={() => {
							setMenuOpen(false);
							// navigate('/wizualizacje');
						}}>
						<StyledButton2 href='#'>Wizualizacje</StyledButton2>
					</li>
				</ScrollLink>

				<ScrollLink to='kontakt' smooth={true} duration={500} spy={true}>
					<li onClick={() => setMenuOpen(false)}>
						<StyledButton2 href='#'>Kontakt</StyledButton2>
					</li>
				</ScrollLink>
			</ul>
		</div>
	);
};
