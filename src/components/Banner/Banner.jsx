import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';



import './Banner.css';

import Trim1 from './Trim1.mp4';
import Trim2 from './Trim2.mp4';
import Trim3 from './Trim3.mp4';
import Trim4 from './Trim4.mp4';
import Trim5 from './Trim5.mp4';

export const Banner = () => {
	const AutoplaySlider = withAutoplay(AwesomeSlider);

	const modifyVideoElements = () => {
		const videos = document.querySelectorAll('.slider video');
		videos.forEach(video => {
			video.muted = true;
			video.autoplay = true;
			video.preload = 'auto';
			video.controls = false;
			video.play().catch(e => {
				console.error('Error trying to play the video:', e);
			});
		});
	};
	useEffect(() => {
		modifyVideoElements(); // Modyfikuj od razu po montażu
		console.log('Banner mounted');
	}, []);

	return (
		<div className='slider-container'>
			<AutoplaySlider
				className='slider'
				play={true}
				cancelOnInteraction={false}
				onTransitionStart={modifyVideoElements}
				onFirstMount={modifyVideoElements}
				interval={6000}
				animation='cubeAnimation'
				bullets={false}
				organicArrows={false}
				infinite={true}
				transitionDelay={0}>
				<div data-src={Trim1} />
				<div data-src={Trim2} />
				<div data-src={Trim3} />
				<div data-src={Trim4} />
				<div data-src={Trim5} />
			</AutoplaySlider>
		</div>
	);
};
