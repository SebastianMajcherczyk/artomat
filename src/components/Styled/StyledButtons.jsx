import styled from '@emotion/styled';
import { Button, Link } from '@mui/material';

export const StyledButton1 = styled(Link)(({ theme }) => ({
	// minWidth: '65px',
	color: '#376097',
	// border: '1.5px solid #376097',
	borderRadius: '24px',
	marginLeft: '0.2rem',
	marginRight: '0.2rem',
	padding: '0.5rem 1rem',
	transition: 'all 0.5s ease-in-out',
	textDecoration: 'none',
	textAlign: 'center',
	cursor: 'pointer',
	'&:hover': {
		// border: '1.5px solid #ff980a',
		// backgroundColor: '#ff980a',
		transform: 'scale(1.2)',
		boxShadow: '5px 5px 10px #000',
	},
	'@media (min-width: 992px)': {
		fontSize: '1.5rem',
	},
}));

export const StyledButton2 = styled(Link)(({ theme }) => ({
	// minWidth: '65px',
	color: '#fcfcfc',
	// border: '1.5px solid #376097',

	textDecoration: 'none',
	textAlign: 'center',
	'&:hover': {
		// border: '1.5px solid #ff980a',
		// backgroundColor: '#ff980a',
		transform: 'scale(1.1)',
		textShadow: '5px 5px 10px #000',
	},
}));
