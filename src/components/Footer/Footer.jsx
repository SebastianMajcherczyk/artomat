import React from 'react';
import './Footer.css';
import EmailLink from './EmailLink';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router';
import { ContactForm } from '../ContactForm/ContactForm';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Link as ScrollLink } from 'react-scroll';

export const Footer = () => {
	const navigate = useNavigate();
	return (
		<footer className='footer '>
			{/* <ContactForm /> */}
			<div className='footer-2'>
				<ScrollLink to='home' smooth={true} duration={500} spy={true}>
					<img src='/logo_4.png' alt='logo' className='logo' height='60px' />
				</ScrollLink>
				<div className='social-media'>
					{' '}
					<a
						href='https://www.facebook.com/profile.php?id=61556020384377'
						name='facebook'
						target='_blank'
						rel='noreferrer'
						className='social-icon'
						data-tooltip-id='fb-tooltip'>
						<FacebookOutlinedIcon />
					</a>{' '}
					<a className='social-icon' data-tooltip-id='ig-tooltip'>
						<InstagramIcon />
					</a>
					<a className='social-icon' data-tooltip-id='wa-tooltip'>
						<WhatsAppIcon />{' '}
					</a>{' '}
					<Tooltip
						id='fb-tooltip'
						place='top'
						variant='info'
						content='Facebook'
						delayHide={100}
						style={{ backgroundColor: '#8b003d' }}
					/>
					<Tooltip
						id='ig-tooltip'
						place='top'
						variant='info'
						content='Instagram'
						delayHide={100}
						style={{ backgroundColor: '#8b003d' }}
					/>
					<Tooltip
						id='wa-tooltip'
						place='top'
						variant='info'
						content='WhatsApp'
						delayHide={100}
						style={{ backgroundColor: '#8b003d' }}
					/>
				</div>

				<div className='contact'>
					<p>Kontakt:</p>
					<div className='phone'>
						<LocalPhoneIcon /> <p>tel: 555 796 000</p>
					</div>
					<div className='email'>
						<EmailIcon /> <p>mail:</p>
						<EmailLink />
					</div>
					<div className='address'>
						<PlaceIcon />
						<p>Adres: </p>
						<p>ul. Lorem ipsum 1</p>
						<p>00-000 Lorem</p>
					</div>
				</div>

				
			</div>
		</footer>
	);
};
