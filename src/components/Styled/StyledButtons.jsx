import styled from '@emotion/styled';
import { Button, Link } from '@mui/material';

export const StyledButton1 = styled(Button)(({ theme, disableHoverScale }) => ({
	// minWidth: '65px',
	color: '#00375f',
	// border: '1.5px solid #376097',
	fontSize: '12px',
	fontWeight: '700',
	borderRadius: '24px',
	marginLeft: '5px',
	marginRight: '5px',
	padding: '0.2rem 0.2rem',
	transition: ' 0.7s ease',
	textDecoration: 'none',
	textAlign: 'center',
	cursor: 'pointer',
	textTransform: 'uppercase',
	'&:hover': {
		// border: '1.5px solid #ff980a',
		// color: '#5f2eef',
		color: '#8b003d',
		transform: disableHoverScale ? 'none' :'scale(120%, 120%)',
		// textShadow: '5px 5px 10px #000',
	},
	'@media (min-width: 992px)': {
		fontSize: '16px',
	},
}));

export const StyledButton2 = styled(Link)(({ theme }) => ({
	// minWidth: '65px',
	color: '#00375f',
	// border: '1.5px solid #376097',

	textDecoration: 'none',
	textAlign: 'center',
	cursor: 'pointer',
	'&:hover': {
		// border: '1.5px solid #ff980a',
		// backgroundColor: '#ff980a',
		transform: 'scale(1.1)',
		textShadow: '5px 5px 10px #000',
	},
}));
