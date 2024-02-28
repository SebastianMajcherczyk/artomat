import React, { useState } from 'react';
import { StyledButton1 } from '../Styled/StyledButtons';
import { Button } from '@mui/material';

const EmailLink = () => {
	const [user, domain] = ['kontakt', 'loftprint.pl'];
	const [email, setEmail] = useState('');

	const revealEmail = () => {
		setEmail(`${user}@${domain}`);
	};

	return (
		<div className='email-link'>
			{!email && (
				<Button
					onClick={revealEmail}
					sx={{
						color: '#00375f',
						fontSize: '14px',
						whiteSpace: 'nowrap',
						textTransform: 'lowercase',
					}}>
					Pokaż adres...
				</Button>
			)}
			{email && (
				<p>
					<a href={`mailto:${email}`}>{email}</a>
				</p>
			)}
		</div>
	);
};

export default EmailLink;
