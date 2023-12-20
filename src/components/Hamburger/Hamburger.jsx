import React from 'react';
import Hamburger from 'hamburger-react';
import './Hamburger.css';
import { StyledButton2 } from '../Styled/StyledButtons';

export const HamburgerMenu = () => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	return (
		<div className='hamburger' >
			<Hamburger toggled={menuOpen} toggle={setMenuOpen} />
			<ul className={menuOpen ? 'nav-links open' : 'nav-links'} onClick={() => setMenuOpen(false)}>
				<li onClick={() => setMenuOpen(false)}>
					<StyledButton2>Home</StyledButton2>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<StyledButton2 href='#'>Technika</StyledButton2>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<StyledButton2 href='#'>Ceny</StyledButton2>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<StyledButton2 href='#'>Realizacje</StyledButton2>
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
