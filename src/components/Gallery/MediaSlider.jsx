import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { Close } from '@mui/icons-material';

export const MediaSlider = ({ images, selectedIndex, setViewerIsOpen }) => {
	return (
		<div className='gallery-slider'>
			<div
				className='gallery-slider-close'
				onClick={() => setViewerIsOpen(false)}>
				<Close />
			</div>
			<Carousel
				index={selectedIndex}
				className='karuzela'
				navButtonsAlwaysVisible
				autoPlay={false}
				>
				{images.map((item, i) => (
					<Paper
						key={i}
						elevation={0}
						sx={{
							backgroundColor: 'transparent',
						}}>
						<img
							src={item.img}
							alt={item.title}
							style={{
								maxHeight: '80%',
								maxWidth: '100%',
								objectFit: 'contain',
								margin: '0 auto',
							}}
						/>
					</Paper>
				))}
			</Carousel>
		</div>
	);
};
