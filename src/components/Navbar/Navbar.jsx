import React from 'react';
import { StyledButton1 } from '../Styled/StyledButtons';
import './Navbar.css';
import { useNavigate } from 'react-router';

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div className='navbar'>
			<StyledButton1 onClick={() => navigate('/')}>Home</StyledButton1>
			<StyledButton1 onClick={() => navigate('/technique')}>
				Technika
			</StyledButton1>
			<StyledButton1 onClick={() => navigate('prices')}>Ceny</StyledButton1>
			<StyledButton1 onClick={() => navigate('/portfolio')}>Realizacje</StyledButton1>
			<StyledButton1 onClick={() => navigate('visualize')}>Wizualizacje</StyledButton1>
			<StyledButton1 onClick={() => navigate('/inspirations')}>Inspiracje</StyledButton1>
			<StyledButton1>Kontakt</StyledButton1>
		</div>
	);
};
